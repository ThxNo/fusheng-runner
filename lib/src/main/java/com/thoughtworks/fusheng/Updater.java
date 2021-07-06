package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.thoughtworks.fusheng.Executor.Context;

import java.util.Map;
import java.util.Set;

public class Updater {
  private final Visitor visitor;

  Updater(Visitor visitor) {
    this.visitor = visitor;
  }

  public JSONObject update(Context context, JSONObject domJson) {
    Set<Map.Entry<String, Object>> entries = context.<JSONObject>getContext("$").entrySet();

    domJson.keySet().forEach(key -> {
      JSONObject dom = domJson.getJSONObject(key);
      JSONObject children = DomHelper.getChildren(dom);

      entries.forEach(entry -> {
        visitor.handle(context, children, entry.getKey());
      });
    });

    return domJson;
  }
}
