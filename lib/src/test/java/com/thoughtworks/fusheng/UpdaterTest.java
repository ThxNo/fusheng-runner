package com.thoughtworks.fusheng;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.ImmutableMap;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import com.thoughtworks.fusheng.Executor.Context;

import static org.junit.jupiter.api.Assertions.*;

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
    JSONObject domJson = JSON.parseObject("{\n" +
            "    \"type\": \"tag\",\n" +
            "    \"name\": \"p\",\n" +
            "    \"attrs\": {\n" +
            "        \"class\": \"example\",\"ctxId\":\"uuid1\"\n" +
            "    },\n" +
            "    \"voidElement\": false,\n" +
            "    \"children\": [\n" +
            "        {\n" +
            "            \"type\": \"text\",\n" +
            "            \"content\": \"pot为\"\n" +
            "        },\n" +
            "        {\n" +
            "            \"type\": \"tag\",\n" +
            "            \"name\": \"span\",\n" +
            "            \"attrs\": {\"class\":\"assertion\",\"data-expect\":\"equal\",\"data-action\":\"getPot\",\"data-id\":\"uuid2\"},\n" +
            "            \"voidElement\": false,\n" +
            "            \"children\": [\n" +
            "                {\n" +
            "                    \"type\": \"text\",\n" +
            "                    \"content\": \"得到描述为\"\n" +
            "                },\n" +
            "                {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-expect\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": [\n" +
            "                        {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": 1\n" +
            "                        }\n" +
            "                    ]\n" +
            "                },\n" +
            "                {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-actual\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": [\n" +
            "                        {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": \"\"\n" +
            "                        }\n" +
            "                    ]\n" +
            "                }\n" +
            "            ]\n" +
            "        }\n" +
            "    ]\n" +
            "}");
    JSONObject expected = JSON.parseObject("{\n" +
            "    \"type\": \"tag\",\n" +
            "    \"name\": \"p\",\n" +
            "    \"attrs\": {\n" +
            "        \"class\": \"example\",\"ctxId\":\"uuid1\"\n" +
            "    },\n" +
            "    \"voidElement\": false,\n" +
            "    \"children\": [\n" +
            "        {\n" +
            "            \"type\": \"text\",\n" +
            "            \"content\": \"pot为\"\n" +
            "        },\n" +
            "        {\n" +
            "            \"type\": \"tag\",\n" +
            "            \"name\": \"span\",\n" +
            "            \"attrs\": {\"class\":\"assertion\",\"data-expect\":\"equal\",\"data-action\":\"getPot\",\"data-id\":\"uuid2\"},\n" +
            "            \"voidElement\": false,\n" +
            "            \"children\": [\n" +
            "                {\n" +
            "                    \"type\": \"text\",\n" +
            "                    \"content\": \"得到描述为\"\n" +
            "                },\n" +
            "                {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-expect error\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": [\n" +
            "                        {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": 1\n" +
            "                        }\n" +
            "                    ]\n" +
            "                },\n" +
            "                {\n" +
            "                    \"type\": \"tag\",\n" +
            "                    \"name\": \"span\",\n" +
            "                    \"attrs\": {\"class\":\"assert-actual visible\"},\n" +
            "                    \"voidElement\": false,\n" +
            "                    \"children\": [\n" +
            "                        {\n" +
            "                            \"type\": \"text\",\n" +
            "                            \"content\": 3\n" +
            "                        }\n" +
            "                    ]\n" +
            "                }\n" +
            "            ]\n" +
            "        }\n" +
            "    ]\n" +
            "}");
    JSONObject actual = Updater.update(context, domJson);

    assertEquals(expected, actual);
  }
}
