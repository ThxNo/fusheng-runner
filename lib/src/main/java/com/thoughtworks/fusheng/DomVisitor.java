package com.thoughtworks.fusheng;

import static com.thoughtworks.fusheng.DomHelper.getAttrs;
import static com.thoughtworks.fusheng.DomHelper.getChildren;
import static com.thoughtworks.fusheng.DomHelper.isIncludeClass;
import static com.thoughtworks.fusheng.DomHelper.updateClass;
import static com.thoughtworks.fusheng.DomHelper.updateContent;

import com.thoughtworks.fusheng.executor.Executor.Context;
import java.util.Map;
import java.util.Objects;

public class DomVisitor implements Visitor {
  @Override
  public void handle(Context context, Map<String, Object> children, String uuid) {
    children.keySet().forEach(key -> {
      Map<String, Object> child = (Map<String, Object>)children.get(key);
      Map<String, Object> attrs = getAttrs(child);
      Map<String, Object> innerChildren = getChildren(child);

      if (attrs != null) {
        Object assertionId = attrs.get("assertion-id");
        if (Objects.equals(assertionId, uuid)) {
          innerChildren.keySet().forEach(innerKey -> {
            Map<String, Object> childObject = (Map<String, Object>)innerChildren.get(innerKey);
            Map<String, Object> innerAttrs = getAttrs(childObject);
            updateDomJson(context, uuid, childObject, innerAttrs);
          });
        }
      }
      if (innerChildren != null) {
        handle(context, innerChildren, uuid);
      }
    });
  }

  private void updateSpecifiedDomJson(Context context, String key, Map<String, Object> child, Map<String, Object> attrs, String field) {
    Object value = context.getContext("$." + key + "." + field + ".value");
    Map<String, String> classnames = context.getContext("$." + key + "." + field + ".class");

    updateClass(attrs, String.join(" ", classnames.values()));
    updateContent(child, value);
  }

  private void updateDomJson(Context context, String uuid, Map<String, Object> child, Map<String, Object> attrs) {
    if (attrs == null) {
      return;
    }

    Map<String, Object> innerChild = (Map<String, Object>)getChildren(child).get("0");
    if (isIncludeClass(attrs, "assert-expect")) {
      updateSpecifiedDomJson(context, uuid, innerChild, attrs, "expect");
    }
    if (isIncludeClass(attrs, "assert-actual")) {
      updateSpecifiedDomJson(context, uuid, innerChild, attrs, "actual");
    }
  }
}
