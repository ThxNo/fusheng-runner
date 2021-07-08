package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.thoughtworks.fusheng.executor.StdEnvironment.Context;
import java.util.Map;
import java.util.Set;

public class Updater {
  private final Visitor visitor;

  Updater(Visitor visitor) {
    this.visitor = visitor;
  }

  public Map<String, Object> update(Context context, Map<String, Object> domJson) {
    Set<Map.Entry<String, Object>> entries = context.<JSONObject>getContext("$").entrySet();

    domJson.keySet().forEach(key -> {
      Map<String, Object> dom = (Map<String, Object>)domJson.get(key);
      Map<String, Object> children = DomHelper.getChildren(dom);

      entries.forEach(entry -> {
        visitor.handle(context, children, entry.getKey());
      });
    });

    return domJson;
  }
}
