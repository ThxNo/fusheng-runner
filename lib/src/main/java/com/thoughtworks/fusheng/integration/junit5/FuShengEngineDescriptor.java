package com.thoughtworks.fusheng.integration.junit5;

import org.junit.platform.engine.UniqueId;
import org.junit.platform.engine.support.descriptor.EngineDescriptor;

public class FuShengEngineDescriptor extends EngineDescriptor {
    public FuShengEngineDescriptor(UniqueId uniqueId, FuShengTestSourceProvider testSourceProvider) {
        super(uniqueId, "FuSheng");
    }
}
