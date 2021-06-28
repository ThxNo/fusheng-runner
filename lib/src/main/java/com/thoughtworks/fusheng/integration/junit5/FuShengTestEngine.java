package com.thoughtworks.fusheng.integration.junit5;

import com.thoughtworks.fusheng.Executor;
import com.thoughtworks.fusheng.ExecutorFactory;
import com.thoughtworks.fusheng.exception.FixtureInitFailedException;
import com.thoughtworks.fusheng.exception.FixtureNotFoundException;
import org.junit.platform.engine.EngineDiscoveryRequest;
import org.junit.platform.engine.EngineExecutionListener;
import org.junit.platform.engine.ExecutionRequest;
import org.junit.platform.engine.TestDescriptor;
import org.junit.platform.engine.TestEngine;
import org.junit.platform.engine.TestExecutionResult;
import org.junit.platform.engine.UniqueId;

public class FuShengTestEngine implements TestEngine {
    @Override
    public String getId() {
        return "fu-sheng";
    }

    @Override
    public TestDescriptor discover(EngineDiscoveryRequest discoveryRequest, UniqueId uniqueId) {
        return new FuShengDiscoverySelectorResolver().resolve(discoveryRequest, uniqueId);
    }

    @Override
    public void execute(ExecutionRequest request) {
        TestDescriptor engineDescriptor = request.getRootTestDescriptor();
        EngineExecutionListener listener = request.getEngineExecutionListener();
        listener.executionStarted(engineDescriptor);
        for (TestDescriptor fixtureDescriptor : engineDescriptor.getChildren()) {
            listener.executionStarted(fixtureDescriptor);
            Object fixtureInstance = getFixtureInstance(fixtureDescriptor.getDisplayName());
            Executor executor = ExecutorFactory.getJsExecutor();

            for (TestDescriptor testDescriptor : fixtureDescriptor.getChildren()) {
                listener.executionStarted(testDescriptor);
                System.out.println("run example");
                listener.executionFinished(testDescriptor, TestExecutionResult.successful());
            }

            listener.executionFinished(fixtureDescriptor, TestExecutionResult.successful());
        }
        listener.executionFinished(engineDescriptor, TestExecutionResult.successful());
    }

    private Object getFixtureInstance(String fixtureClassName) {
        try {
            return Class.forName(fixtureClassName).newInstance();
        } catch (ClassNotFoundException e) {
            throw new FixtureNotFoundException(String.format("fixture %s not found", fixtureClassName), e);
        } catch (IllegalAccessException | InstantiationException e) {
            throw new FixtureInitFailedException(String.format("fixture %s initialize failed", fixtureClassName), e);
        }
    }
}
