package com.thoughtworks.fusheng.integration.junit5;

import org.junit.platform.commons.support.ModifierSupport;
import org.junit.platform.commons.util.LruCache;
import org.junit.platform.engine.TestSource;
import org.junit.platform.engine.support.descriptor.ClassSource;
import org.junit.platform.engine.support.descriptor.MethodSource;
import org.junit.runner.Description;

import java.lang.reflect.Method;
import java.util.Collections;

import static java.util.function.Predicate.isEqual;
import static java.util.stream.Collectors.toList;
import static org.junit.platform.commons.util.FunctionUtils.where;
import static org.junit.platform.commons.util.ReflectionUtils.findMethods;

public class FuShengTestSourceProvider {

    private final java.util.Map<Class<?>, java.util.List<Method>> methodsCache = Collections.synchronizedMap(new LruCache<>(31));

    public TestSource findTestSource(Description description) {
        Class<?> testClass = description.getTestClass();
        if (testClass != null) {
            String methodName = description.getMethodName();
            if (methodName != null) {
                Method method = findMethod(testClass, sanitizeMethodName(methodName));
                if (method != null) {
                    return MethodSource.from(testClass, method);
                }
            }
            return ClassSource.from(testClass);
        }
        return null;
    }

    private String sanitizeMethodName(String methodName) {
        if (methodName.contains("[") && methodName.endsWith("]")) {
            // special case for parameterized tests
            return methodName.substring(0, methodName.indexOf("["));
        }
        return methodName;
    }

    private Method findMethod(Class<?> testClass, String methodName) {
        java.util.List<Method> methods = methodsCache.computeIfAbsent(testClass, clazz -> findMethods(clazz, m -> true)).stream() //
                                                     .filter(where(Method::getName, isEqual(methodName))) //
                                                     .collect(toList());
        if (methods.isEmpty()) {
            return null;
        }
        if (methods.size() == 1) {
            return methods.get(0);
        }
        methods = methods.stream().filter(ModifierSupport::isPublic).collect(toList());
        if (methods.size() == 1) {
            return methods.get(0);
        }
        return null;
    }
}
