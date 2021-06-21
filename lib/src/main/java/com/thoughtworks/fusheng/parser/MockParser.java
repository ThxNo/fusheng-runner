package com.thoughtworks.fusheng.parser;

import com.alibaba.fastjson.JSONObject;

public class MockParser {

    public JSONObject transformHtmlToDOMJson(String html) {
        return JSONObject.parseObject("{\"type\":\"html\",\"children\":[{\"type\":\"span\",\"attributes\":{\"data-id\":\"uuid1\",\"data-action\":\"a\",\"class\":['assert-equal']},\"children\":[{\"type\":\"text\",\"value\":\"1\"},{\"type\":\"span\",\"attributes\":{\"class\":['assert-expect']},\"children\":[{\"type\":\"text\",\"value\":\"1\"}]},{\"type\":\"span\",\"attributes\":{\"class\":['assert-actual']},\"children\":[]}]}]}");
    }

    public String getExecutableCodeFromHtml(String html) {
        return "let actual = a();\n" +
                "context[\"uuid1\"].actual.value = actual;\n" +
                "let result1 = actual == context[\"uuid1\"].expect.value;\n" +
                "if (result1) {\n" +
                "    context[\"uuid1\"].actual.class.push(\"success\");\n" +
                "    context[\"uuid1\"].expect.class.push(\"invisibility\");\n" +
                "} else {\n" +
                "    context[\"uuid1\"].actual.class.push(\"error\");\n" +
                "    context[\"uuid1\"].expect.class.push(\"visibility\");\n" +
                "}";
    }
}
