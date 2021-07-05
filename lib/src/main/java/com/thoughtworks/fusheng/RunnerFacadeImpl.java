package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.ImmutableMap;
import com.thoughtworks.fusheng.Executor.Context;
import com.thoughtworks.fusheng.exception.FixtureInitFailedException;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class RunnerFacadeImpl implements RunnerFacade {
    private final RunnerResource runnerResource;
    private final JSONArray domJsonArray;
    private Map<String, Object> symbols;

    public RunnerFacadeImpl(Class<?> fixtureClass) {
        symbols = ImmutableMap.of("fixture", getFixtureInstance(fixtureClass));

        String spec = Reader.getSpecByFixture(fixtureClass.getSimpleName());
        Map<String, Object> jsCodeAndDomJSON = new ParserAdapter("javascript").getJSCodeAndDomJSON(spec);
        Object jsCodeObj = jsCodeAndDomJSON.get("jsCode");
        JSONObject jsonJSCode = new JSONObject((Map<String, Object>) jsCodeObj);
        domJsonArray = (JSONArray) jsCodeAndDomJSON.get("domJson");
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
                                           Updater.update(context, domJsonArray);
                                       });
        // 暂时假定测试都是成功的
        return true;
    }
}
