package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.thoughtworks.fusheng.Executor.Context;

import java.util.Map;
import java.util.Objects;
import java.util.Set;

public class Updater {
  static public JSONObject update(Context context, JSONObject domJson) {
    Set<Map.Entry<String, Object>> entries = context.<JSONObject>getContext("$").entrySet();

    domJson.keySet().forEach(key -> {
      JSONObject jsonObject = domJson.getJSONObject(key);
      JSONObject children = getChildren(jsonObject);

      entries.forEach(entry -> {
        String uuid = entry.getKey();
        handleDomJson(context, children, uuid);
      });
    });

    return domJson;
  }

  private static void handleDomJson(Context context, JSONObject children, String uuid) {
    children.keySet().forEach(key -> {
      JSONObject child = children.getJSONObject(key);
      JSONObject attrs = getAttrs(child);
      JSONObject innerChildren = getChildren(child);

      if (attrs != null) {
        Object assertionId = attrs.getInnerMap().get("assertion-id");
        if (Objects.equals(assertionId, uuid)) {
          innerChildren.keySet().forEach(innerKey -> {
            JSONObject childObject = innerChildren.getJSONObject(innerKey);
            JSONObject innerAttrs = getAttrs(childObject);
            updateDomJson(context, uuid, childObject, innerAttrs);
          });
        }
      }
      if (innerChildren != null) {
        handleDomJson(context, innerChildren, uuid);
      }
    });
  }

  private static JSONObject getChildren(JSONObject domJson) {
    return domJson.getJSONObject("children");
  }

  private static JSONObject getAttrs(JSONObject jsonObject) {
    return jsonObject.getObject("attrs", JSONObject.class);
  }

  private static void updateClass(Map<String, Object> childInnerMap, Map<String, String> classnames) {
    childInnerMap.put("class", String.join(" ", classnames.values()));
  }

  private static void updateContent(JSONObject childDom, Object value) {
    childDom.getInnerMap().put("content", value);
  }

  private static void updateSpecifiedDomJson(Context context, String key, JSONObject childDom, Map<String, Object> childInnerMap, String field) {
    Object value = context.getContext("$." + key + "." + field + ".value");
    Map<String, String> classnames = context.getContext("$." + key + "." + field + ".class");

    updateClass(childInnerMap, classnames);
    updateContent(childDom, value);
  }

  private static boolean isIncludeSpecifiedClass(Map<String, Object> childInnerMap, String classname) {
    return ((String) childInnerMap.get("class")).contains(classname);
  }

  private static void updateDomJson(Context context, String uuid, JSONObject childObject, JSONObject attrs) {
    if (attrs == null) {
      return;
    }

    Map<String, Object> childInnerMap = attrs.getInnerMap();
    JSONObject childDom = getChildren(childObject).getJSONObject("0");
    if (isIncludeSpecifiedClass(childInnerMap, "assert-expect")) {
      updateSpecifiedDomJson(context, uuid, childDom, childInnerMap, "expect");
    }
    if (isIncludeSpecifiedClass(childInnerMap, "assert-actual")) {
      updateSpecifiedDomJson(context, uuid, childDom, childInnerMap, "actual");
    }
  }
}
