package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.ImmutableMap;
import com.thoughtworks.fusheng.Executor.Context;
import com.thoughtworks.fusheng.exception.FixtureInitFailedException;
import com.thoughtworks.fusheng.exception.FixtureNotFoundException;
import java.util.Map;
import lombok.RequiredArgsConstructor;

import static java.util.stream.Collectors.joining;

@RequiredArgsConstructor(staticName = "of")
public class RunnerFacadeImpl implements RunnerFacade {

    private final String fixtureClassName;
    private final ParserAdapter parserAdapter = new ParserAdapter("javascript");

    private static Object getFixtureInstance(String fixtureClassName) {
        try {
            return Class.forName(fixtureClassName).newInstance();
        } catch (ClassNotFoundException e) {
            throw new FixtureNotFoundException(String.format("fixture %s not found", fixtureClassName), e);
        } catch (IllegalAccessException | InstantiationException e) {
            throw new FixtureInitFailedException(String.format("fixture %s initialize failed", fixtureClassName), e);
        }
    }

    private String getFixturePathByClassName(String fixtureClassName) {
        return null;
    }

    @Override
    public void run(String testName) {
        Object fixtureInstance = getFixtureInstance(fixtureClassName);
        Executor executor = ExecutorFactory.getJsExecutor();

        Map<String, Object> symbols = ImmutableMap.of("Fixture", fixtureInstance);

        String spec = Reader.getSpecByFixture(getFixturePathByClassName(fixtureClassName));
        Map<String, Object> jsCodeAndDomJSON = parserAdapter.getJSCodeAndDomJSON(spec);

        Object jsCodeObj = jsCodeAndDomJSON.get("jsCode");

        // TODO: 暂时将所有 example 的代码拼接到一起，后续可考虑分开
        JSONObject jsonJSCode = new JSONObject((Map<String, Object>) jsCodeObj);
        String jsCode = jsonJSCode.keySet().stream().map(key -> jsonJSCode.get(key).toString()).collect(joining("\n"));

        Context context = executor.exec(symbols, jsCode);

        JSONObject domJson = (JSONObject) jsCodeAndDomJSON.get("domJson");

        Updater.update(context, domJson);
    }
}
