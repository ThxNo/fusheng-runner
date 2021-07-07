package com.thoughtworks.fusheng;

import java.util.Map;

public class DomHelper {
  public static Map<String, Object> getChildren(Map<String, Object> dom) {
    return (Map<String, Object>)dom.get("children");
  }

  public static Map<String, Object> getAttrs(Map<String, Object> dom) {
    return (Map<String, Object>)dom.get("attrs");
  }

  public static void updateContent(Map<String, Object> child, Object value) {
    child.put("content", value);
  }

  public static void updateClass(Map<String, Object> attrs, String classnames) {
    attrs.put("class", classnames);
  }

  public static boolean isIncludeClass(Map<String, Object> attrs, String classname) {
    return ((String) attrs.get("class")).contains(classname);
  }
}
