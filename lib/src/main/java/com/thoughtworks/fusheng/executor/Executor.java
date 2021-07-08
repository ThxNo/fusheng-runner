package com.thoughtworks.fusheng.executor;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSONPath;
import com.thoughtworks.fusheng.exception.ExecutorException;
import java.util.HashMap;
import java.util.Map;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor(staticName = "of")
public class Executor {

    private final String scripting;

    private static final String CONTEXT_FIELD_NAME = "context";
    private static final ScriptEngineManager scriptEngineManager = new ScriptEngineManager();

    @RequiredArgsConstructor(staticName = "of")
    public static class Context {
        private final Map<String, Object> data;
        private JSONObject context;

        public <T> T get(String fieldName) {
            return (T) data.get(fieldName);
        }

        public <T> T getContext(String jsonPath) {
            jsonPath = jsonPath.replaceAll("-", "\\\\-");
            if (context == null) {
                context = new JSONObject(get(CONTEXT_FIELD_NAME));
            }
            try {
                return (T) JSONPath.eval(context, jsonPath);
            } catch (NullPointerException e) {
                return null;
            }
        }
    }


    public Context exec(Map<String, Object> symbols, String jsCode) {
        ScriptEngine engine = scriptEngineManager.getEngineByName(scripting);

        engine.put(CONTEXT_FIELD_NAME, new HashMap<>());
        symbols.forEach(engine::put);

        try {
            engine.eval(jsCode);
            return Context.of(engine.getBindings(ScriptContext.ENGINE_SCOPE));
        } catch (ScriptException e) {
            throw new ExecutorException(String.format("Run JS code failed, cause by\n%s", e.getMessage()), e);
        }
    }
}
