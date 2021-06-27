package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ParserAdapterTest {

    @Test
    void getJSCodeAndDomJSON() {
        String html = "<p class=\"example\">\n" +
                "pot为<span class=\"assertion\" data-action=\"getPot\" data-expect=“equal”>1</span>\n" +
                "</p>";

        ParserAdapter javascript = new ParserAdapter("javascript");
        JSONObject obj = javascript.getJSCodeAndDomJSON(html);
        Object jsCode = obj.get("jsCode");
        Object domJSON = obj.get("domJSON");

        assertNotNull(jsCode);
        assertNotNull(domJSON);
    }

    @Test
    void transformDomJSONToHtml() {
        JSONObject domJSON = JSONObject.parseObject("{\n" +
                "   \"type\": \"tag\",\n" +
                "   \"name\": \"p\",\n" +
                "   \"attrs\": {\n" +
                "       \"class\": \"example\",\n" +
                "       \"ctxId\":\"uuid1\"\n" +
                "   },\n" +
                "   \"voidElement\": false,\n" +
                "   \"children\": [\n" +
                "       {\n" +
                "           \"type\": \"text\",\n" +
                "           \"content\": \"pot为\"\n" +
                "       },\n" +
                "       {\n" +
                "           \"type\": \"tag\",\n" +
                "           \"name\": \"span\",\n" +
                "           \"attrs\": {\"class\":\"assertion error\",\"data-expect\":\"equal\",\"data-action\":\"getPot\",\"data-id\":\"uuid2\"},\n" +
                "           \"voidElement\": false,\n" +
                "           \"children\": [\n" +
                "               {\n" +
                "                   \"type\": \"tag\",\n" +
                "                   \"name\": \"span\",\n" +
                "                   \"attrs\": {\"class\":\"assert-expect\"},\n" +
                "                   \"voidElement\": false,\n" +
                "                   \"children\": [\n" +
                "                       {\n" +
                "                           \"type\": \"text\",\n" +
                "                           \"content\": \"1\"\n" +
                "                       }\n" +
                "                   ]\n" +
                "               },\n" +
                "               {\n" +
                "                   \"type\": \"tag\",\n" +
                "                   \"name\": \"span\",\n" +
                "                   \"attrs\": {\"class\":\"assert-actual\"},\n" +
                "                   \"voidElement\": false,\n" +
                "                   \"children\": [\n" +
                "                       {\n" +
                "                           \"type\": \"text\",\n" +
                "                           \"content\": \"2\"\n" +
                "                       }\n" +
                "                   ]\n" +
                "               }\n" +
                "           ]\n" +
                "       }\n" +
                "   ]\n" +
                "}");

        String expected = "<p class=\"example\" ctxId=\"uuid1\">\n" +
                "pot为\n" +
                "<span class=\"assertion error\" data-action=\"getPot\" data-expect=“equal” data-id=\"uuid2\">\n" +
                "    <span class=\"assert-expect\">1</span>\n" +
                "\t<span class=\"assert-actual\">2</span>\n" +
                "</span>\n" +
                "</p>";

        ParserAdapter javascript = new ParserAdapter("javascript");
        Object obj = javascript.transformDomJSONToHtml(domJSON);
        assertEquals(obj, expected);
    }
}
