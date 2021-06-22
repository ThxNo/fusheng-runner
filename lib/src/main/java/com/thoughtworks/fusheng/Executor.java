package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.exception.ExecutorException;
import lombok.AllArgsConstructor;

import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor(staticName = "of")
public class Executor {

    private final String scripting;

    private static final ScriptEngineManager scriptEngineManager = new ScriptEngineManager();

    @AllArgsConstructor(staticName = "of")
    public static class Context {
        private final Map<String, Object> data;

        public <T> T get(String fieldName) {
            return (T) data.get(fieldName);
        }
    }


    public Context exec(Map<String, Object> symbols, String jsCode) {
        ScriptEngine engine = scriptEngineManager.getEngineByName(scripting);

        engine.put("context", new HashMap<>());
        symbols.forEach(engine::put);

        try {
            engine.eval(jsCode);
            return Context.of(engine.getBindings(ScriptContext.ENGINE_SCOPE));
        } catch (ScriptException e) {
            throw new ExecutorException(String.format("Run JS code failed, cause by\n%s", e.getMessage()), e);
        }
    }
}
