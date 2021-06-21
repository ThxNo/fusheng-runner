package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.exception.ExecutorException;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.Map;

public class Executor {

    private static final String JAVASCRIPT = "javascript";

    private final ScriptEngineManager scriptEngineManager = new ScriptEngineManager();

    public Object exec(Map<String, Object> symbols, String jsCode) {
        ScriptEngine engine = scriptEngineManager.getEngineByName(JAVASCRIPT);

        symbols.forEach(engine::put);

        try {
            return engine.eval(jsCode);
        } catch (ScriptException e) {
            throw new ExecutorException(String.format("Run JS code failed, cause by\n%s", e.getMessage()), e);
        }

    }
}
