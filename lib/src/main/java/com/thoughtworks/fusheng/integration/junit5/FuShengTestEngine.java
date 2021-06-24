package com.thoughtworks.fusheng.integration.junit5;

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
            for (TestDescriptor testDescriptor : fixtureDescriptor.getChildren()) {
                listener.executionStarted(testDescriptor);
                System.out.println("run example");
                listener.executionFinished(testDescriptor, TestExecutionResult.successful());
            }
            listener.executionFinished(fixtureDescriptor, TestExecutionResult.successful());
        }
        listener.executionFinished(engineDescriptor, TestExecutionResult.successful());
    }
}
