package com.thoughtworks.fusheng.integration.junit5;

import com.thoughtworks.fusheng.Reader;
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
        ClassSource classSource = (ClassSource) parent.getSource().get();
        List<MethodSource> methodSources = findMethodSource(classSource);
        //TODO: 创建Example的描述器
        methodSources.forEach(methodSource -> {
            // 调用 Reader 检查同名 spec 文件是否存在
            String[] classname = methodSource.getClassName().split("\\.");
            Reader.read(classname[classname.length - 1]);
            UniqueId id = parent.getUniqueId().append(FuShengTestDescriptor.SEGMENT_TYPE_EXAMPLE, methodSource.getMethodName());
            parent.addChild(new FuShengTestDescriptor(id, methodSource.getMethodName(), classSource));
        });
    }

    public List<MethodSource> findMethodSource(ClassSource classSource) {
        return Stream.of(classSource.getJavaClass().getDeclaredMethods()).map(MethodSource::from).collect(toList());
    }
}
