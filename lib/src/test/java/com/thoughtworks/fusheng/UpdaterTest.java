package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.ImmutableMap;
import com.thoughtworks.fusheng.Executor.Context;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UpdaterTest {
  Context context;

  @BeforeEach
  void setUp() {
    Executor executor = Executor.of("javascript");

    String ctxString =
            "        {\"expect\": {\n" +
                    "            \"value\": 1,\n" +
                    "            \"class\": [\"assert-expect\", \"error\"]\n" +
                    "        },\n" +
                    "        \"actual\": {\n" +
                    "            \"value\": 3,\n" +
                    "            \"class\": [\"assert-actual\", \"visible\"]\n" +
                    "        }\n" +
                    "    }";

    ImmutableMap<String, Object> symbols = ImmutableMap.of("fixture", new ExecutorTest.MockedFixture());
    String jsCode = String.format("context.uuid2 = %s;", ctxString);

    context = executor.exec(symbols, jsCode);
  }

  @Test
  void should_get_correct_result_when_fill_assert_failed_context_content_to_dom_json_given_dom_json_and_context() {
    JSONObject domJson = new JSONObject();
    domJson.put("0", JSONObject.parseObject("{\n" +
            "    \"type\": \"tag\",\n" +
            "    \"name\": \"p\",\n" +
            "    \"attrs\": {\n" +
            "        \"class\": \"example\",\"context-id\":\"uuid1\"\n" +
            "    },\n" +
            "    \"voidElement\": false,\n" +
            "    \"children\": {\n" +
            "       \"0\": {\n" +
            "            \"type\": \"text\",\n" +
            "            \"content\": \"pot为\"\n" +
            "        },\n" +
            "       \"1\": {\n" +
            "            \"type\": \"tag\",\n" +
            "            \"name\": \"span\",\n" +
            "            \"attrs\": {\"class\":\"assertion\",\"data-expect\":\"equal\",\"data-action\":\"getPot\",\"assertion-id\":\"uuid2\"},\n" +
            "            \"voidElement\": false,\n" +
            "            \"children\": {\n" +
            "               \"0\": {\n" +
            "                    \"type\": \"text\",\n" +
            "                    \"content\": \"得到描述为\"\n" +
            "                },\n" +
            "               \"1\": {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-expect\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": {\n" +
            "                       \"0\": {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": 1\n" +
            "                        }\n" +
            "                    }\n" +
            "                },\n" +
            "               \"2\": {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-actual\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": {\n" +
            "                       \"0\": {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": \"\"\n" +
            "                        }\n" +
            "                    }\n" +
            "                }\n" +
            "            }\n" +
            "        }\n" +
            "    }\n" +
            "}"));
    JSONObject expected = new JSONObject();
    expected.put("0", JSONObject.parseObject("{\n" +
            "    \"type\": \"tag\",\n" +
            "    \"name\": \"p\",\n" +
            "    \"attrs\": {\n" +
            "        \"class\": \"example\",\"context-id\":\"uuid1\"\n" +
            "    },\n" +
            "    \"voidElement\": false,\n" +
            "    \"children\": {\n" +
            "       \"0\": {\n" +
            "            \"type\": \"text\",\n" +
            "            \"content\": \"pot为\"\n" +
            "        },\n" +
            "       \"1\": {\n" +
            "            \"type\": \"tag\",\n" +
            "            \"name\": \"span\",\n" +
            "            \"attrs\": {\"class\":\"assertion\",\"data-expect\":\"equal\",\"data-action\":\"getPot\",\"assertion-id\":\"uuid2\"},\n" +
            "            \"voidElement\": false,\n" +
            "            \"children\": {\n" +
            "               \"0\": {\n" +
            "                    \"type\": \"text\",\n" +
            "                    \"content\": \"得到描述为\"\n" +
            "                },\n" +
            "               \"1\": {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-expect error\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": {\n" +
            "                       \"0\": {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": 1\n" +
            "                        }\n" +
            "                    }\n" +
            "                },\n" +
            "               \"2\": {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-actual visible\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": {\n" +
            "                       \"0\": {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": 3\n" +
            "                        }\n" +
            "                    }\n" +
            "                }\n" +
            "            }\n" +
            "        }\n" +
            "    }\n" +
            "}"));
    Updater updater = new Updater(new DomVisitor());
    Map<String, Object> actual = updater.update(context, domJson);

    assertEquals(expected, actual);
  }

  @Test
  void should_get_correct_result_when_fill_assert_failed_context_content_to_dom_json_given_nested_dom_json_and_context() {
    JSONObject domJson = new JSONObject();
    domJson.put("0", JSONObject.parseObject("{\n" +
            "  \"type\": \"tag\",\n" +
            "  \"name\": \"p\",\n" +
            "  \"attrs\": {\n" +
            "    \"class\": \"example\",\n" +
            "    \"context-id\": \"uuid1\"\n" +
            "  },\n" +
            "  \"voidElement\": false,\n" +
            "  \"children\": {\"0\": {\n" +
            "      \"type\": \"text\",\n" +
            "      \"content\": \"pot为\"\n" +
            "    },\n" +
            "   \"1\": {\n" +
            "      \"type\": \"tag\",\n" +
            "      \"name\": \"p\",\n" +
            "      \"children\": {\n" +
            "       \"0\": {\n" +
            "          \"type\": \"tag\",\n" +
            "          \"name\": \"span\",\n" +
            "          \"attrs\": {\n" +
            "            \"class\": \"assertion\",\n" +
            "            \"data-expect\": \"equal\",\n" +
            "            \"data-action\": \"getPot\",\n" +
            "            \"assertion-id\": \"uuid2\"\n" +
            "          },\n" +
            "          \"voidElement\": false,\n" +
            "          \"children\": { \"0\": {\n" +
            "              \"type\": \"text\",\n" +
            "              \"content\": \"得到描述为\"\n" +
            "            },\n" +
            "           \"1\": {\n" +
            "              \"type\": \"tag\",\n" +
            "              \"name\": \"span\",\n" +
            "              \"attrs\": {\n" +
            "                \"class\": \"assert-expect\"\n" +
            "              },\n" +
            "              \"voidElement\": false,\n" +
            "              \"children\": { \"0\": {\n" +
            "                \"type\": \"text\",\n" +
            "                \"content\": 1\n" +
            "              }}\n" +
            "            },\n" +
            "           \"2\": {\n" +
            "              \"type\": \"tag\",\n" +
            "              \"name\": \"span\",\n" +
            "              \"attrs\": {\n" +
            "                \"class\": \"assert-actual\"\n" +
            "              },\n" +
            "              \"voidElement\": false,\n" +
            "              \"children\": { \"0\": {\n" +
            "                \"type\": \"text\",\n" +
            "                \"content\": \"\"\n" +
            "              }}\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "  }\n" +
            "}"));
    JSONObject expected = new JSONObject();
    expected.put("0", JSONObject.parseObject("{\n" +
            "  \"type\": \"tag\",\n" +
            "  \"name\": \"p\",\n" +
            "  \"attrs\": {\n" +
            "    \"class\": \"example\",\n" +
            "    \"context-id\": \"uuid1\"\n" +
            "  },\n" +
            "  \"voidElement\": false,\n" +
            "  \"children\": { \"0\": {\n" +
            "      \"type\": \"text\",\n" +
            "      \"content\": \"pot为\"\n" +
            "    },\n" +
            "   \"1\": {\n" +
            "      \"type\": \"tag\",\n" +
            "      \"name\": \"p\",\n" +
            "      \"children\": {\n" +
            "       \"0\": {\n" +
            "          \"type\": \"tag\",\n" +
            "          \"name\": \"span\",\n" +
            "          \"attrs\": {\n" +
            "            \"class\": \"assertion\",\n" +
            "            \"data-expect\": \"equal\",\n" +
            "            \"data-action\": \"getPot\",\n" +
            "            \"assertion-id\": \"uuid2\"\n" +
            "          },\n" +
            "          \"voidElement\": false,\n" +
            "          \"children\": { \"0\": {\n" +
            "              \"type\": \"text\",\n" +
            "              \"content\": \"得到描述为\"\n" +
            "            },\n" +
            "           \"1\": {\n" +
            "              \"type\": \"tag\",\n" +
            "              \"name\": \"span\",\n" +
            "              \"attrs\": {\n" +
            "                \"class\": \"assert-expect error\"\n" +
            "              },\n" +
            "              \"voidElement\": false,\n" +
            "              \"children\": { \"0\": {\n" +
            "                \"type\": \"text\",\n" +
            "                \"content\": 1\n" +
            "              }}\n" +
            "            },\n" +
            "           \"2\": {\n" +
            "              \"type\": \"tag\",\n" +
            "              \"name\": \"span\",\n" +
            "              \"attrs\": {\n" +
            "                \"class\": \"assert-actual visible\"\n" +
            "              },\n" +
            "              \"voidElement\": false,\n" +
            "              \"children\": { \"0\": {\n" +
            "                \"type\": \"text\",\n" +
            "                \"content\": 3\n" +
            "              }}\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "  }\n" +
            "}"));
    Updater updater = new Updater(new DomVisitor());
    Map<String, Object> actual = updater.update(context, domJson);

    assertEquals(expected, actual);
  }
}
