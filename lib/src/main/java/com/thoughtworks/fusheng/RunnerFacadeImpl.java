package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.ImmutableMap;
import com.thoughtworks.fusheng.Executor.Context;
import com.thoughtworks.fusheng.exception.FixtureInitFailedException;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class RunnerFacadeImpl implements RunnerFacade {
    private final RunnerResource runnerResource;
    private final JSONObject domJson;
    private final ParserAdapter parserAdapter;
    private Map<String, Object> symbols;

    public RunnerFacadeImpl(Class<?> fixtureClass) {
        symbols = ImmutableMap.of("fixture", getFixtureInstance(fixtureClass));
        parserAdapter = new ParserAdapter("javascript");

        String spec = Reader.getSpecByFixture(fixtureClass.getSimpleName());
        Map<String, Object> jsCodeAndDomJSON = parserAdapter.getJSCodeAndDomJSON(spec);
        Object jsCodeObj = jsCodeAndDomJSON.get("jsCode");
        JSONObject jsonJSCode = new JSONObject((Map<String, Object>) jsCodeObj);
        domJson = new JSONObject((Map<String, Object>) jsCodeAndDomJSON.get("domJSON")) ;
        List<ExampleResource> exampleResources = jsonJSCode.keySet().stream()
                                                           .map(key -> new ExampleResource(key, jsonJSCode.get(key).toString()))
                                                           .collect(Collectors.toList());
        runnerResource = new RunnerResource(exampleResources);
    }

    private static Object getFixtureInstance(Class<?> fixtureClass) {
        try {
            return fixtureClass.newInstance();
        } catch (IllegalAccessException | InstantiationException e) {
            throw new FixtureInitFailedException(String.format("fixture %s initialize failed", fixtureClass.getName()), e);
        }
    }

    @Override
    public RunnerResource getRunnerResource() {
        return runnerResource;
    }

    @Override
    public Boolean run(String exampleName) {
        Executor executor = ExecutorFactory.getJsExecutor();
        RunnerResource runnerResource = getRunnerResource();
        runnerResource.exampleResources.stream()
                                       .filter(exampleResource -> exampleName.equalsIgnoreCase(exampleResource.getExampleName()))
                                       .forEach(exampleResource -> {
                                           Context context = executor.exec(symbols, exampleResource.getJsCodes());
                                           JSONObject updatedDomJSON = Updater.update(context, domJson);
                                           String html = parserAdapter.transformDomJSONToHtml(updatedDomJSON);
                                           // 保存 html 到指定目录的文件中，需要和 server 约定好
                                       });
        // 暂时假定测试都是成功的
        return true;
    }
}
