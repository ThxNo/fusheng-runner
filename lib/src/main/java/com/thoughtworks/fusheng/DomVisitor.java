package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.Executor.Context;
import com.alibaba.fastjson.JSONObject;

import java.util.Map;
import java.util.Objects;

import static com.thoughtworks.fusheng.DomHelper.*;

public class DomVisitor implements Visitor {
  @Override
  public void handle(Context context, JSONObject children, String uuid) {
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
        handle(context, innerChildren, uuid);
      }
    });
  }

  private void updateSpecifiedDomJson(Context context, String key, JSONObject child, Map<String, Object> attrs, String field) {
    Object value = context.getContext("$." + key + "." + field + ".value");
    Map<String, String> classnames = context.getContext("$." + key + "." + field + ".class");

    updateClass(attrs, String.join(" ", classnames.values()));
    updateContent(child, value);
  }

  private void updateDomJson(Context context, String uuid, JSONObject child, JSONObject attrs) {
    if (attrs == null) {
      return;
    }

    Map<String, Object> attrsMap = attrs.getInnerMap();
    JSONObject innerChild = getChildren(child).getJSONObject("0");
    if (isIncludeClass(attrsMap, "assert-expect")) {
      updateSpecifiedDomJson(context, uuid, innerChild, attrsMap, "expect");
    }
    if (isIncludeClass(attrsMap, "assert-actual")) {
      updateSpecifiedDomJson(context, uuid, innerChild, attrsMap, "actual");
    }
  }
}
