package com.thoughtworks.fusheng;

import com.google.common.collect.ImmutableMap;
import com.thoughtworks.fusheng.exception.ExecutorException;
import com.thoughtworks.fusheng.exception.FixtureInitFailedException;
import com.thoughtworks.fusheng.exception.SaverException;
import com.thoughtworks.fusheng.executor.Executor;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.io.HTMLWriter;

public class RunnerFacadeImpl implements RunnerFacade {

    private final RunnerResource runnerResource;
    private Map<String, Object> symbols;
    private Class<?> fixtureClass;
    private final Executor executor;
    private final Document document;

    public RunnerFacadeImpl(Class<?> fixtureClass) {
        this.fixtureClass = fixtureClass;

        symbols = ImmutableMap.of("fixture", getFixtureInstance(fixtureClass));
        String spec = Reader.getSpecByFixture(fixtureClass.getSimpleName());

        document = getDocumentDom(spec);

        ParserAdapter parserAdapter = new ParserAdapter("javascript", document);

        Map<String, String> jsCode = parserAdapter.getJSCode();

        List<ExampleResource> exampleResources = jsCode.entrySet().stream()
            .map(entry -> new ExampleResource(entry.getKey(), entry.getValue()))
            .collect(Collectors.toList());

        executor = parserAdapter.getExecutor();

        runnerResource = new RunnerResource(exampleResources);
    }

    @Override
    public RunnerResource getRunnerResource() {
        return runnerResource;
    }

    @Override
    public Boolean run(String exampleName) {
        RunnerResource runnerResource = getRunnerResource();

        runnerResource.exampleResources.stream()
            .filter(exampleResource -> exampleName.equalsIgnoreCase(exampleResource.getExampleName()))
            .forEach(exampleResource -> executor.exec(symbols, exampleResource.getJsCodes()));

        // 暂时假定测试都是成功的
        return true;
    }

    @Override
    public void saveDomJSONToFile() {
        Path path = Paths.get(System.getProperty("user.dir"), "build", "reports", "tests", "fusheng", "result",
            fixtureClass.getSimpleName() + ".html");

        try {
            Path folder = path.getParent();
            if (!Files.exists(folder)) {
                Files.createDirectories(folder);
            }
            HTMLWriter htmlWriter = new HTMLWriter(new FileWriter(path.toFile()));
            htmlWriter.write(document);
            htmlWriter.close();
        } catch (IOException e) {
            throw new SaverException(String.format("Save spec failed: %s", path), e);
        }
    }

    private static Object getFixtureInstance(Class<?> fixtureClass) {
        try {
            return fixtureClass.newInstance();
        } catch (IllegalAccessException | InstantiationException e) {
            throw new FixtureInitFailedException(String.format("Fixture %s initialize failed", fixtureClass.getName()),
                e);
        }
    }

    private static Document getDocumentDom(String document) {
        try {
            return DocumentHelper.parseText(document);
        } catch (Exception ex) {
            throw new ExecutorException("Init spec dom failed", ex);
        }
    }
}
