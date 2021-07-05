package com.thoughtworks.fusheng.integration.junit5;

import com.thoughtworks.fusheng.RunnerFacade;
import org.junit.platform.engine.UniqueId;
import org.junit.platform.engine.support.descriptor.ClassSource;
import org.junit.platform.engine.support.descriptor.MethodSource;

import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class FuShengFixtureDescriptorPostProcessor {

    public FuShengFixtureDescriptorPostProcessor() {
    }

    public void createDescendants(FuShengFixtureDescriptor parent) {
        if (!parent.getSource().isPresent()) {
            throw new RuntimeException("No source found");
        }
        final RunnerFacade runnerFacade = parent.getRunnerFacade();
        runnerFacade.getRunnerResource().getExampleResources().forEach(
                exampleResource -> {
                    UniqueId id = parent.getUniqueId().append(FuShengTestDescriptor.SEGMENT_TYPE_EXAMPLE, exampleResource.getExampleName());
                    parent.addChild(new FuShengExampleDescriptor(id, exampleResource.getExampleName(), exampleResource.getExampleName(), parent.getSource().get()));
                }
        );
    }

    public List<MethodSource> findMethodSource(ClassSource classSource) {
        return Stream.of(classSource.getJavaClass().getDeclaredMethods()).map(MethodSource::from).collect(toList());
    }
}
