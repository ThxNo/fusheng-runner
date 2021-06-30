package com.thoughtworks.fusheng.integration.junit5;

import com.thoughtworks.fusheng.RunnerFacade;
import com.thoughtworks.fusheng.RunnerFacadeImpl;
import com.thoughtworks.fusheng.exception.ExampleFailedException;
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
            RunnerFacade runnerFacade = RunnerFacadeImpl.of(fixtureDescriptor.getDisplayName());

            for (TestDescriptor testDescriptor : fixtureDescriptor.getChildren()) {
                listener.executionStarted(testDescriptor);

                // TODO: testDescriptor 是spec中的每个example

                if (runnerFacade.run(testDescriptor.getDisplayName())) {
                    listener.executionFinished(testDescriptor, TestExecutionResult.successful());
                } else {
                    listener.executionFinished(testDescriptor, TestExecutionResult.failed(new ExampleFailedException("")));
                }
            }

            listener.executionFinished(fixtureDescriptor, TestExecutionResult.successful());
        }
        listener.executionFinished(engineDescriptor, TestExecutionResult.successful());
    }
}
