package com.thoughtworks.fusheng;

public class ExecutorFactory {
    public static Executor getExecutorByName(String name) {
        return Executor.of(name);
    }
}
