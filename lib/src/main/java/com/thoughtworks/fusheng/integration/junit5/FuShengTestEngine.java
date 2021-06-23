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
        for (TestDescriptor testDescriptor : engineDescriptor.getChildren()) {
            // cast it to our own class
            FuShengRunnerDescriptor descriptor = (FuShengRunnerDescriptor) testDescriptor;
            listener.executionStarted(testDescriptor);
            // here you would add your super-complicated logic of how to actually run the test
            if (descriptor.getDisplayName().contains("Test")) {
                listener.executionFinished(testDescriptor, TestExecutionResult.successful());
            } else {
                listener.executionFinished(testDescriptor, TestExecutionResult.failed(new AssertionError("Test was incorrect.")));
            }

        }
        listener.executionFinished(engineDescriptor, TestExecutionResult.successful());
    }
}
