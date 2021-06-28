package com.thoughtworks.fusheng;

public class ExecutorFactory {
    public static Executor getExecutorByName(String scriptingName) {
        return Executor.of(scriptingName);
    }

    public static Executor getJsExecutor() {
        return ExecutorFactory.getExecutorByName("javascript");
    }
}
