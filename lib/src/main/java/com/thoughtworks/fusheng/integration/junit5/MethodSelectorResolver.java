package com.thoughtworks.fusheng.integration.junit5;

import org.junit.platform.commons.JUnitException;
import org.junit.platform.commons.util.ReflectionUtils;
import org.junit.platform.engine.TestDescriptor;
import org.junit.platform.engine.UniqueId;
import org.junit.platform.engine.discovery.MethodSelector;
import org.junit.platform.engine.discovery.UniqueIdSelector;
import org.junit.platform.engine.support.descriptor.MethodSource;
import org.junit.platform.engine.support.discovery.SelectorResolver;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.Optional;

import static org.junit.platform.engine.support.discovery.SelectorResolver.Resolution.unresolved;
import static org.junit.vintage.engine.descriptor.VintageTestDescriptor.SEGMENT_TYPE_RUNNER;

public class MethodSelectorResolver implements SelectorResolver {

    @Override
    public Resolution resolve(MethodSelector selector, Context context) {
        Method testMethod = selector.getJavaMethod();
        return resolveTestMethod(testMethod, context);
    }

    @Override
    public Resolution resolve(UniqueIdSelector selector, Context context) {
        for (UniqueId current = selector.getUniqueId(); !current.getSegments().isEmpty(); current = current.removeLastSegment()) {
            if (SEGMENT_TYPE_RUNNER.equals(current.getLastSegment().getType())) {
                String testClassName = current.getLastSegment().getValue();
                Class<?> testClass = ReflectionUtils.tryToLoadClass(testClassName)//
                                                    .getOrThrow(cause -> new JUnitException("Unknown class: " + testClassName, cause));
                return resolveTestMethod(testClass.getMethods()[0], context);
            }
        }
        return unresolved();
    }

    private Resolution resolveTestMethod(Method testMethod, Context context) {
        return context.addToParent(parent -> Optional.of(createFuShengTestDescriptor(parent, testMethod))).map(
                runnerTestDescriptor -> Match.partial(runnerTestDescriptor, Collections::emptySet)).map(Resolution::match).orElse(unresolved());
    }

    private FuShengTestDescriptor createFuShengTestDescriptor(TestDescriptor parent, Method testMethod) {
        return new FuShengTestDescriptor(parent.getUniqueId(), testMethod.getName(), MethodSource.from(testMethod));
    }
}
