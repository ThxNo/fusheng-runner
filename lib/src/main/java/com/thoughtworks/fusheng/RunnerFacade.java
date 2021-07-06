package com.thoughtworks.fusheng;

public interface RunnerFacade {

    RunnerResource getRunnerResource();

    Boolean run(String fixtureClzName);

    void saveDomJSONToFile();
}
