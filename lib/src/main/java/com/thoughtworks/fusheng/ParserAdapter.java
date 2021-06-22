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

    public ParserAdapter(String scripting) throws FileNotFoundException, ScriptException {
        ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
        engine = scriptEngineManager.getEngineByName(scripting);
        engine.eval(new FileReader(scriptPath));
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

    public JSONObject transformHtmlToDOMJson(String html) {
        Object result = executeScript("transformHtmlToDOMJson", html);
        return new JSONObject((Map<String, Object>) result);
    }

    public String getExecutableCodeFromHtml(String html)  {
        return (String) executeScript("getExecutableCodeFromHtml", html);
    }

    public JSONObject getContextFromHtml(String html) {
        Object result = executeScript("getContextFromHtml", html);
        return new JSONObject((Map<String, Object>) result);
    }
}
