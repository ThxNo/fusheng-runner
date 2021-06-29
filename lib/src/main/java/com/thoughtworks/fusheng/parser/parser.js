function getJSCodeAndDomJSON(html) {
    return {
        jsCode: {
            "uuid1": "context[\"uuid2\"].expect = 1;\n" +
                "context[\"uuid2\"].actual = Fixture.getPot();\n" +
                "context[\"uuid2\"].result = context[\"uuid2\"].expect === context[\"uuid2\"].actual;"
        },
        domJSON: {
            "type": "tag",
            "name": "p",
            "attrs": {
                "class": "example",
                "context-id":"uuid1"
            },
            "voidElement": false,
            "children": [
                {
                    "type": "text",
                    "content": "pot为"
                },
                {
                    "type": "tag",
                    "name": "span",
                    "attrs": {"class":"assertion","data-expect":"equal","data-action":"getPot","assertion-id":"uuid2"},
                    "voidElement": false,
                    "children": [
                        {
                            "type": "tag",
                            "name": "span",
                            "attrs": {"class":"assert-expect"},
                            "voidElement": false,
                            "children": [
                                {
                                    "type": "text",
                                    "content": "1"
                                }
                            ]
                        },
                        {
                            "type": "tag",
                            "name": "span",
                            "attrs": {"class":"assert-actual"},
                            "voidElement": false,
                            "children": [
                                {
                                    "type": "text",
                                    "content": ""
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}


function transformDomJSONToHtml(domJSON) {
    return "<p class=\"example\" context-id=\"uuid1\">\n" +
        "pot为\n" +
        "<span class=\"assertion error\" data-action=\"getPot\" data-expect=“equal” assertion-id=\"uuid2\">\n" +
        "    <span class=\"assert-expect\">1</span>\n" +
        "\t<span class=\"assert-actual\">2</span>\n" +
        "</span>\n" +
        "</p>"
}
