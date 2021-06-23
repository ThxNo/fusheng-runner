package com.thoughtworks.fusheng.integration.junit5;

import org.junit.platform.commons.util.ClassFilter;
import org.junit.platform.engine.EngineDiscoveryRequest;
import org.junit.platform.engine.TestDescriptor;
import org.junit.platform.engine.UniqueId;
import org.junit.platform.engine.support.discovery.EngineDiscoveryRequestResolver;

public class FuShengDiscoverySelectorResolver {
    private static final IsPotentialFuShengTestClass isPotentialFuShengTestClass = new IsPotentialFuShengTestClass();

    private static final EngineDiscoveryRequestResolver<TestDescriptor> resolver = EngineDiscoveryRequestResolver.builder()
                                                                                                                 .addClassContainerSelectorResolver(isPotentialFuShengTestClass)
                                                                                                                 .addSelectorResolver(context -> new ClassSelectorResolver(ClassFilter.of(context.getClassNameFilter(), isPotentialFuShengTestClass)))
                                                                                                                 .build();

    public TestDescriptor resolve(EngineDiscoveryRequest discoveryRequest, UniqueId uniqueId) {
        FuShengTestSourceProvider testSourceProvider = new FuShengTestSourceProvider();
        FuShengEngineDescriptor engineDescriptor = new FuShengEngineDescriptor(uniqueId, testSourceProvider);
        resolver.resolve(discoveryRequest, engineDescriptor);
        return engineDescriptor;
    }
}
