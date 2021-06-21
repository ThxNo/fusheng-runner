package com.thoughtworks.fusheng;

import com.google.common.collect.ImmutableMap;
import com.thoughtworks.fusheng.Executor.Context;
import org.junit.jupiter.api.Test;

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
        String jsCode = "fixture.add(2, 3);";

        Object result = executor.exec(symbols, jsCode, new Context());

        assertEquals(5, result);
    }

    @Test
    void should_exec_js_and_set_context_success() {

        Executor executor = Executor.of("javascript");

        ImmutableMap<String, Object> symbols = ImmutableMap.of("fixture", new MockedFixture());
        String jsCode = "context.result = fixture.add(5, 3);";

        Context context = new Context();
        executor.exec(symbols, jsCode, context);

        assertEquals(8, context.getContext().get("result"));
    }
}