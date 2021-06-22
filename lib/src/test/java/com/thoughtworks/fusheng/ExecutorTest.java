package com.thoughtworks.fusheng;

import com.google.common.collect.ImmutableMap;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ExecutorTest {

    public static class MockedFixture {
        public int intField = 1;

        public int add(int lhs, int rhs) {
            return lhs + rhs;
        }
    }

    @Test
    void should_exec_js_code_with_given_symbol_success() {
        Executor executor = Executor.of("javascript");

        ImmutableMap<String, Object> symbols = ImmutableMap.of("fixture", new MockedFixture());
        String jsCode = "c = fixture.add(2, 3);";

        Map<String, Object> result = executor.exec(symbols, jsCode);

        assertEquals(5, result.get("c"));
    }

    @Test
    void should_exec_js_and_set_context_success() {

        Executor executor = Executor.of("javascript");

        ImmutableMap<String, Object> symbols = ImmutableMap.of("fixture", new MockedFixture());
        String jsCode = "context.result = fixture.add(5, 3);";


        Map<String, Object> result = executor.exec(symbols, jsCode);
        Map<String, Object> context = (Map<String, Object>) result.get("context");

        assertEquals(8, context.get("result"));
    }
}