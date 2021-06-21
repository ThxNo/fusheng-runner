package com.thoughtworks.fusheng;

import com.google.common.collect.ImmutableMap;
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
        Executor executor = new Executor();

        ImmutableMap<String, Object> symbols = ImmutableMap.of("fixture", new MockedFixture());

        String jsCode = "fixture.add(2, 3);";

        Object result = executor.exec(symbols, jsCode);

        assertEquals(5, result);
    }
}