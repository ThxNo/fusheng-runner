package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.exception.ReaderException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class ReaderTest {
  Reader reader;

  @BeforeEach
  void setUp() {
    reader = new Reader();
  }

  @Test
  void should_get_exception_when_receive_a_invalid_path() {
    String invalidPath = "lib/src/test/template/invalidPath.html";
    ReaderException readerException = assertThrows(ReaderException.class, () -> reader.read(invalidPath));
    assertEquals("No such file: " + invalidPath, readerException.getErrorMessage());
  }

  @Test
  void should_get_spec_file_content_when_receive_a_valid_path() {
    String expected = "<!DOCTYPE html>\n" +
            "<html lang=\"en\">\n" +
            "<head>\n" +
            "  <meta charset=\"UTF-8\">\n" +
            "  <title>Spec</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "  <p class=\"example\">\n" +
            "    一局游戏有3名玩家\n" +
            "    <span class=\"variable\" data-name=\"players\">A,B,C</span>\n" +
            "  </p>\n" +
            "</body>\n" +
            "</html>\n";
    String result = reader.read("template/spec.html");

    assertEquals(expected, result);
  }
}
