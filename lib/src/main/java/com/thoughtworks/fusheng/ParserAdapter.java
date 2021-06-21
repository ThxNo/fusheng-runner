package com.thoughtworks.fusheng;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class ParserAdapter {

    private final ScriptEngine engine;

    private final String scriptPath = "src/main/java/com/thoughtworks/fusheng/parser/parser.js";

    public ParserAdapter(String scripting) throws FileNotFoundException, ScriptException {
        ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
        engine = scriptEngineManager.getEngineByName(scripting);
        engine.eval(new FileReader(scriptPath));
    }

    public Object transformHtmlToDOMJson(String html) throws ScriptException, NoSuchMethodException {
        return ((Invocable) engine).invokeFunction("transformHtmlToDOMJson", html);
    }

    public String getExecutableCodeFromHtml(String html) throws ScriptException, NoSuchMethodException {
        return (String) ((Invocable) engine).invokeFunction("getExecutableCodeFromHtml", html);
    }

    public Object getContextFromHtml(String html) throws ScriptException, NoSuchMethodException {
        return ((Invocable) engine).invokeFunction("getContextFromHtml", html);
    }
}
