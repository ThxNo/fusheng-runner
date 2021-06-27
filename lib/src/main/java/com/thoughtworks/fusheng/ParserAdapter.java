package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.thoughtworks.fusheng.exception.ParserAdapterException;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Map;

public class ParserAdapter {

    private final ScriptEngine engine;

    private final String scriptPath = "src/main/java/com/thoughtworks/fusheng/parser/parser.js";

    public ParserAdapter(String scripting) {
        try {
            ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
            engine = scriptEngineManager.getEngineByName(scripting);
            engine.eval(new FileReader(scriptPath));
        } catch (FileNotFoundException e) {
            throw new ParserAdapterException("Not found file: " + scriptPath, e);
        } catch (ScriptException e) {
            throw new ParserAdapterException("Execute script exception: " + scriptPath, e);
        }
    }

    private Object executeScript(String methodName, Object... args)  {
        try {
            Invocable invocable = (Invocable) this.engine;
            return invocable.invokeFunction(methodName, args);
        } catch (NoSuchMethodException e) {
            throw new ParserAdapterException("No such methodName: " + methodName, e);
        } catch (ScriptException e) {
            throw new ParserAdapterException("Execute methodName exception: " + methodName, e);
        }
    }

    public JSONObject getJSCodeAndDomJSON(String html) {
        Object result = executeScript("getJSCodeAndDomJSON", html);
        return new JSONObject((Map<String, Object>) result);
    }

    public String transformDomJSONToHtml(String html)  {
        return (String) executeScript("transformDomJSONToHtml", html);
    }
}
