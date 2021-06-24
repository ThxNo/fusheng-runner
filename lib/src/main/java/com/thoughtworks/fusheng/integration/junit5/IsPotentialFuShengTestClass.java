package com.thoughtworks.fusheng.integration.junit5;

import java.util.function.Predicate;

import static org.junit.platform.commons.util.AnnotationUtils.isAnnotated;
import static org.junit.platform.commons.util.ReflectionUtils.isAbstract;
import static org.junit.platform.commons.util.ReflectionUtils.isInnerClass;
import static org.junit.platform.commons.util.ReflectionUtils.isPublic;

public class IsPotentialFuShengTestClass implements Predicate<Class<?>> {

    @Override
    public boolean test(Class<?> candidate) {
        if (!isPublic(candidate)) {
            return false;
        }
        if (isAbstract(candidate)) {
            return false;
        }
        if (isInnerClass(candidate)) {
            return false;
        }
        return isAnnotated(candidate, FuShengTest.class);
    }
}
