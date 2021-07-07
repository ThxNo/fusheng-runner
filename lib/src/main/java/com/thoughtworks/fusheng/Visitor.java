package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.Executor.Context;

import java.util.Map;

public interface Visitor {
  public void handle(Context context, Map<String, Object> children, String uuid);
}