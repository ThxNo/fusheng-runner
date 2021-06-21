package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.exception.ExecutorException;
import lombok.Data;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.HashMap;
import java.util.Map;

public class Executor {

    private static final String JAVASCRIPT = "javascript";

    private final ScriptEngineManager scriptEngineManager = new ScriptEngineManager();

    @Data
    public static class Context {
        private Map<String, Object> context = new HashMap<>();
    }

    public Object exec(Map<String, Object> symbols, String jsCode, Context context) {
        ScriptEngine engine = scriptEngineManager.getEngineByName(JAVASCRIPT);

        engine.put("context", context.getContext());
        symbols.forEach(engine::put);

        try {
            return engine.eval(jsCode);
        } catch (ScriptException e) {
            throw new ExecutorException(String.format("Run JS code failed, cause by\n%s", e.getMessage()), e);
        }

    }
}
