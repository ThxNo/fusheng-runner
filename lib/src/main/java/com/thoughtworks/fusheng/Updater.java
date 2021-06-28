package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.thoughtworks.fusheng.Executor.Context;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

public class Updater {
  static public JSONObject update(Context context, JSONObject domJson) {
    JSONObject ctx = context.getContext("$");
    JSONArray children = domJson.getJSONArray("children");
    Set<Map.Entry<String, Object>> entries = ctx.entrySet();

    entries.forEach(entry -> {
      String key = entry.getKey();

      for (int i = 0; i < children.size(); i++) {
        JSONObject jsonObject = children.getJSONObject(i);
        JSONObject attrs = jsonObject.getObject("attrs", JSONObject.class);

        if (attrs != null) {
          Map<String, Object> innerMap = attrs.getInnerMap();
          Object id = innerMap.get("data-id");

          if (Objects.equals(id, key)) {
            JSONArray innerChildren = jsonObject.getJSONArray("children");

            for (int j = 0; j < innerChildren.size(); j++) {
              JSONObject childObject = innerChildren.getJSONObject(j);
              JSONObject childAttrs = childObject.getObject("attrs", JSONObject.class);
              JSONArray childrenDom = childObject.getJSONArray("children");

              if (childAttrs != null) {
                Map<String, Object> childInnerMap = childAttrs.getInnerMap();
                Object assertType = childInnerMap.get("class");

                if (Objects.equals(assertType, "assert-expect")) {
                  int value = context.getContext("$." + key + ".expect.value");
                  Map<String, String> classnames = context.getContext("$." + key + ".expect.class");
                  childInnerMap.put("class", String.join(" ", classnames.values()));
                  for (int k = 0; k < childrenDom.size(); k++) {
                    JSONObject dom = childrenDom.getJSONObject(k);
                    Map<String, Object> domInnerMap = dom.getInnerMap();
                    domInnerMap.put("content", value);
                  }
                }

                if (Objects.equals(assertType, "assert-actual")) {
                  int value = context.getContext("$." + key + ".actual.value");
                  Map<String, String> classnames = context.getContext("$." + key + ".actual.class");
                  childInnerMap.put("class", String.join(" ", classnames.values()));
                  for (int k = 0; k < childrenDom.size(); k++) {
                    JSONObject dom = childrenDom.getJSONObject(k);
                    Map<String, Object> domInnerMap = dom.getInnerMap();
                    domInnerMap.put("content", value);
                  }
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
}
