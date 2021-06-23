package com.thoughtworks.fusheng.integration.junit5;

import org.junit.platform.engine.UniqueId;
import org.junit.platform.engine.support.descriptor.ClassSource;
import org.junit.platform.engine.support.descriptor.EngineDescriptor;

public class FuShengRunnerDescriptor extends FuShengTestDescriptor {
    private final FuShengRunner runner;

    public FuShengRunnerDescriptor(UniqueId uniqueId, Class<?> testClass, FuShengRunner runner) {
        super(uniqueId, testClass.getName(), ClassSource.from(testClass));
        this.runner = runner;
    }

    @Override
    public Type getType() {
        return Type.TEST;
    }
}
