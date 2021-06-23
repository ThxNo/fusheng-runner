package com.thoughtworks.fusheng.integration.junit5;

import org.junit.platform.engine.TestSource;
import org.junit.platform.engine.UniqueId;
import org.junit.platform.engine.support.descriptor.AbstractTestDescriptor;

public class FuShengTestDescriptor extends AbstractTestDescriptor {

    public FuShengTestDescriptor(UniqueId uniqueId, String displayName, TestSource source) {
        super(uniqueId, displayName, source);
    }

    @Override
    public Type getType() {
        return Type.TEST;
    }
}
