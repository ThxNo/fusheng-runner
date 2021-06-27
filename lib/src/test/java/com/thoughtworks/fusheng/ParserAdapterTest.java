package com.thoughtworks.fusheng;

import org.junit.jupiter.api.Test;

import javax.script.ScriptException;
import java.io.FileNotFoundException;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ParserAdapterTest {

    @Test
    void getJSCodeAndDomJSON() {
        ParserAdapter javascript = new ParserAdapter("javascript");
        Object obj = javascript.getJSCodeAndDomJSON("mock html");
        assertNotNull(obj);
    }

    @Test
    void transformDomJSONToHtml() {
        String expected = "<p class=\"example\" ctxId=\"uuid1\">\n" +
                "pot为\n" +
                "<span class=\"assertion error\" data-action=\"getPot\" data-expect=“equal” data-id=\"uuid2\">\n" +
                "    <span class=\"assert-expect\">1</span>\n" +
                "\t<span class=\"assert-actual\">2</span>\n" +
                "</span>\n" +
                "</p>";

        ParserAdapter javascript = new ParserAdapter("javascript");
        Object obj = javascript.transformDomJSONToHtml("mock html");
        assertEquals(obj, expected);
    }
}
