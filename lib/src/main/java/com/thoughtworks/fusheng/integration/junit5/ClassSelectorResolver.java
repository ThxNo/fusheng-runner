/*
 * Copyright 2015-2020 the original author or authors.
 *
 * All rights reserved. This program and the accompanying materials are
 * made available under the terms of the Eclipse Public License v2.0 which
 * accompanies this distribution and is available at
 *
 * https://www.eclipse.org/legal/epl-v20.html
 */

package com.thoughtworks.fusheng.integration.junit5;

import org.junit.platform.commons.JUnitException;
import org.junit.platform.commons.util.ClassFilter;
import org.junit.platform.commons.util.ReflectionUtils;
import org.junit.platform.engine.TestDescriptor;
import org.junit.platform.engine.UniqueId;
import org.junit.platform.engine.UniqueId.Segment;
import org.junit.platform.engine.discovery.ClassSelector;
import org.junit.platform.engine.discovery.UniqueIdSelector;
import org.junit.platform.engine.support.discovery.SelectorResolver;

import java.util.Collections;
import java.util.Optional;

import static org.junit.platform.engine.support.discovery.SelectorResolver.Resolution.unresolved;

/**
 * @since 4.12
 */
class ClassSelectorResolver implements SelectorResolver {
	public static final String ENGINE_ID = "fu-sheng";
	public static final String SEGMENT_TYPE_RUNNER = "runner";
	public static final String SEGMENT_TYPE_TEST = "test";
	private final ClassFilter classFilter;

	ClassSelectorResolver(ClassFilter classFilter) {
		this.classFilter = classFilter;
	}

	@Override
	public Resolution resolve(ClassSelector selector, Context context) {
		return resolveTestClass(selector.getJavaClass(), context);
	}

	@Override
	public Resolution resolve(UniqueIdSelector selector, Context context) {
		Segment lastSegment = selector.getUniqueId().getLastSegment();
		if (SEGMENT_TYPE_RUNNER.equals(lastSegment.getType())) {
			String testClassName = lastSegment.getValue();
			Class<?> testClass = ReflectionUtils.tryToLoadClass(testClassName)//
					.getOrThrow(cause -> new JUnitException("Unknown class: " + testClassName, cause));
			return resolveTestClass(testClass, context);
		}
		return unresolved();
	}

	private Resolution resolveTestClass(Class<?> testClass, Context context) {
		if (!classFilter.test(testClass)) {
			return unresolved();
		}
		FuShengRunner runner = new FuShengRunner(testClass);
		return context.addToParent(parent -> Optional.of(createRunnerTestDescriptor(parent, testClass, runner))).map(
			runnerTestDescriptor -> Match.exact(runnerTestDescriptor, Collections::emptySet)).map(Resolution::match).orElse(unresolved());
	}

	private FuShengRunnerDescriptor createRunnerTestDescriptor(TestDescriptor parent, Class<?> testClass, FuShengRunner runner) {
		UniqueId uniqueId = parent.getUniqueId().append("runner", testClass.getName());
		return new FuShengRunnerDescriptor(uniqueId, testClass, runner);
	}

}
