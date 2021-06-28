package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.thoughtworks.fusheng.Executor.Context;

import java.util.Map;
import java.util.Objects;
import java.util.Set;

public class Updater {
  static public JSONObject update(Context context, JSONObject domJson) {
    JSONObject ctx = context.getContext("$");
    JSONArray children = domJson.getJSONArray("children");
    Set<Map.Entry<String, Object>> entries = ctx.entrySet();

    entries.forEach(entry -> {
      String uuid = entry.getKey();

      for (int i = 0; i < children.size(); i++) {
        JSONObject jsonObject = children.getJSONObject(i);
        JSONObject attrs = getAttrsJsonObject(jsonObject);

        if (attrs != null) {
          Object id = attrs.getInnerMap().get("data-id");

          if (Objects.equals(id, uuid)) {
            JSONArray innerChildren = jsonObject.getJSONArray("children");

            for (int j = 0; j < innerChildren.size(); j++) {
              JSONObject childObject = innerChildren.getJSONObject(j);
              JSONObject innerAttrs = getAttrsJsonObject(childObject);

              if (innerAttrs != null) {
                Map<String, Object> childInnerMap = innerAttrs.getInnerMap();
                Object assertType = childInnerMap.get("class");

                if (((String) assertType).contains("assert-expect")) {
                  updateDom(context, uuid, childObject.getJSONArray("children"), childInnerMap, "expect");
                  continue;
                }

                if (((String) assertType).contains("assert-actual")) {
                  updateDom(context, uuid, childObject.getJSONArray("children"), childInnerMap, "actual");
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

  private static JSONObject getAttrsJsonObject(JSONObject jsonObject) {
    return jsonObject.getObject("attrs", JSONObject.class);
  }

  private static void updateDom(Context context, String key, JSONArray childrenDom, Map<String, Object> childInnerMap, String field) {
    int value = context.getContext("$." + key + "." + field + ".value");
    Map<String, String> classnames = context.getContext("$." + key + "." + field + ".class");

    childInnerMap.put("class", String.join(" ", classnames.values()));
    for (int i = 0; i < childrenDom.size(); i++) {
      JSONObject domJson = childrenDom.getJSONObject(i);
      Map<String, Object> domJsonMap = domJson.getInnerMap();
      domJsonMap.put("content", value);
    }
  }
}
