package com.thoughtworks.fusheng;

import java.nio.file.Path;
import java.nio.file.Paths;

public class ServerAdapter {
    public String runExperiment(String specName, String htmlContent) {

        // 通过 specName 找到对应的 fixture
        // 通过 htmlContent 获得 jsCode
        // 然后在 fixture 的上下文中执行 jsCode 并获得执行后的 Document

        String experimentSpecName = specName + System.currentTimeMillis();
        Path path = Paths.get(System.getProperty("user.dir"), "build", "reports", "tests", "fusheng", "experiment",
                experimentSpecName + ".html");

        // 保存最新后的 Document 到 path

        return experimentSpecName;
    }
}
