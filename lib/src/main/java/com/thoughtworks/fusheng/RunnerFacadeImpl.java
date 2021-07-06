package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.ImmutableMap;
import com.thoughtworks.fusheng.Executor.Context;
import com.thoughtworks.fusheng.exception.FixtureInitFailedException;
import com.thoughtworks.fusheng.exception.SaverException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class RunnerFacadeImpl implements RunnerFacade {
    private final RunnerResource runnerResource;
    private JSONObject domJson;
    private final ParserAdapter parserAdapter;
    private Map<String, Object> symbols;
    private Class<?> fixtureClass;

    public RunnerFacadeImpl(Class<?> fixtureClass) {
        this.fixtureClass = fixtureClass;

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
        Updater updater = new Updater(new DomVisitor());
        runnerResource.exampleResources.stream()
                                       .filter(exampleResource -> exampleName.equalsIgnoreCase(exampleResource.getExampleName()))
                                       .forEach(exampleResource -> {
                                           Context context = executor.exec(symbols, exampleResource.getJsCodes());
                                           domJson = updater.update(context, domJson);
                                       });
        // 暂时假定测试都是成功的
        return true;
    }

    @Override
    public void saveDomJSONToFile() {
        //TODO: 后续考虑处理多个 fixture 重名的情况
        Path path = Paths.get(System.getProperty("user.dir"), "build", "reports", "tests", "spec", fixtureClass.getSimpleName() + ".html");

        try {
            String html = parserAdapter.transformDomJSONToHtml(domJson);
            Files.writeString(path, html);
        } catch (IOException e) {
            throw new SaverException(String.format("Save spec failed: %s", path), e);
        }
    }
}
