package com.thoughtworks.fusheng;

import com.thoughtworks.fusheng.exception.ReaderException;

import java.io.IOException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Paths;
import java.util.Optional;

public class Reader {
  static public String read(String path) {
    try {
      String absolutePath = Optional.ofNullable(Reader.class.getClassLoader().getResource(path))
              .map(URL::getPath)
              .orElseThrow(() -> new ReaderException("No such file: " + path));
      return Files.readString(Paths.get(absolutePath), StandardCharsets.UTF_8);
    } catch (NoSuchFileException e) {
      throw new ReaderException("No such file: " + path, e);
    } catch (IOException e) {
      throw new ReaderException("Failed to read: " + path, e);
    }
  }

  static public String getSpecFilePath(String fixturePath) {
    return fixturePath.replace("fixture", "template").replace(".java", ".html");
  }

  public static String getSpecByFixture(String fixturePath) {
    return read(getSpecFilePath(fixturePath));
  }
}
