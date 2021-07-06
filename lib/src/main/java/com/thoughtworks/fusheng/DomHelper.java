package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;

import java.util.Map;

public class DomHelper {
  public static JSONObject getChildren(JSONObject dom) {
    return dom.getJSONObject("children");
  }

  public static JSONObject getAttrs(JSONObject dom) {
    return dom.getObject("attrs", JSONObject.class);
  }

  public static void updateContent(JSONObject child, Object value) {
    child.getInnerMap().put("content", value);
  }

  public static void updateClass(Map<String, Object> attrs, String classnames) {
    attrs.put("class", classnames);
  }

  public static boolean isIncludeClass(Map<String, Object> attrs, String classname) {
    return ((String) attrs.get("class")).contains(classname);
  }
}
