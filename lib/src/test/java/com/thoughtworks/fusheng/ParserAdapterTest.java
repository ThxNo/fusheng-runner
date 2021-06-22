package com.thoughtworks.fusheng;

import org.junit.jupiter.api.Test;

import javax.script.ScriptException;
import java.io.FileNotFoundException;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ParserAdapterTest {

    @Test
    void transformHtmlToDOMJson() {
        ParserAdapter javascript = new ParserAdapter("javascript");
        Object obj = javascript.transformHtmlToDOMJson("mock html");
        assertNotNull(obj);
    }

    @Test
    void getExecutableCodeFromHtml() {
        String expected = "let actual = a();\n" +
                "context[\"uuid1\"].actual.value = actual;\n" +
                "let result1 = actual == context[\"uuid1\"].expect.value;\n" +
                "if (result1) {\n" +
                "    context[\"uuid1\"].actual.class.push(\"success\");\n" +
                "    context[\"uuid1\"].expect.class.push(\"invisibility\");\n" +
                "} else {\n" +
                "    context[\"uuid1\"].actual.class.push(\"error\");\n" +
                "    context[\"uuid1\"].expect.class.push(\"visibility\");\n" +
                "}";

        ParserAdapter javascript = new ParserAdapter("javascript");
        Object obj = javascript.getExecutableCodeFromHtml("mock html");
        assertEquals(obj, expected);
    }

    @Test
    void getContextFromHtml() {
        ParserAdapter javascript = new ParserAdapter("javascript");
        Object obj = javascript.getContextFromHtml("mock html");
        assertNotNull(obj);
    }
}
