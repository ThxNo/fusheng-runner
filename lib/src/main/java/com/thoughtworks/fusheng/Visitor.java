package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.Executor.Context;

import com.alibaba.fastjson.JSONObject;

public interface Visitor {
  public void handle(Context context, JSONObject children, String uuid);
}
