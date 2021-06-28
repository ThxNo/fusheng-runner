package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.thoughtworks.fusheng.Executor.Context;

import java.util.Map;
import java.util.Objects;
import java.util.Set;

public class Updater {
  static public JSONObject update(Context context, JSONObject domJson) {
    Set<Map.Entry<String, Object>> entries = context.<JSONObject>getContext("$").entrySet();
    JSONArray children = getChildren(domJson);

    entries.forEach(entry -> {
      String uuid = entry.getKey();

      for (int i = 0; i < children.size(); i++) {
        JSONObject jsonObject = children.getJSONObject(i);
        JSONObject attrs = getAttrsJsonObject(jsonObject);

        if (attrs != null) {
          Object id = attrs.getInnerMap().get("assertion-id");
          if (Objects.equals(id, uuid)) {
            JSONArray innerChildren = getChildren(jsonObject);
            for (int j = 0; j < innerChildren.size(); j++) {
              JSONObject childObject = innerChildren.getJSONObject(j);
              JSONObject innerAttrs = getAttrsJsonObject(childObject);
              if (innerAttrs != null) {
                Map<String, Object> childInnerMap = innerAttrs.getInnerMap();
                JSONObject childDom = getChildren(childObject).getJSONObject(0);
                if (((String) childInnerMap.get("class")).contains("assert-expect")) {
                  updateDom(context, uuid, childDom, childInnerMap, "expect");
                }
                if (((String) childInnerMap.get("class")).contains("assert-actual")) {
                  updateDom(context, uuid, childDom, childInnerMap, "actual");
                }
              }
            }

            break;
          }
        }
      }
    });

    return domJson;
  }

  private static JSONArray getChildren(JSONObject domJson) {
    return domJson.getJSONArray("children");
  }

  private static JSONObject getAttrsJsonObject(JSONObject jsonObject) {
    return jsonObject.getObject("attrs", JSONObject.class);
  }

  private static void updateDom(Context context, String key, JSONObject childDom, Map<String, Object> childInnerMap, String field) {
    int value = context.getContext("$." + key + "." + field + ".value");
    Map<String, String> classnames = context.getContext("$." + key + "." + field + ".class");

    childInnerMap.put("class", String.join(" ", classnames.values()));
    childDom.getInnerMap().put("content", value);
  }
}
