package com.thoughtworks.fusheng.adapter;

import static java.nio.charset.StandardCharsets.UTF_8;

import com.thoughtworks.fusheng.exception.ParserAdapterException;
import com.thoughtworks.fusheng.executor.Executor;
import com.thoughtworks.fusheng.executor.ExecutorFactory;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Map;
import lombok.Setter;
import org.dom4j.Document;

@Setter
public class ParserAdapter {

    private Executor executor;

    private final String scriptPath = "src/main/java/com/thoughtworks/fusheng/parser/parser.cjs.js";

    public ParserAdapter(String scripting, Document document) {
        try {
            executor = ExecutorFactory.getExecutor(scripting, Files.readString(Paths.get(scriptPath), UTF_8));
            executor.addSymbol("$", document);
        } catch (IOException e) {
            throw new ParserAdapterException("Not found file: " + scriptPath, e);
        }
    }

    public Map<String, String> getJSCode() {
        Object result = executor.invoke("getJsCode");

        return (Map<String, String>) result;
    }

    public Executor getExecutor() {
        return executor;
    }
}
