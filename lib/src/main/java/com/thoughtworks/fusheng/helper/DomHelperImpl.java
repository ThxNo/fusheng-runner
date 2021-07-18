package com.thoughtworks.fusheng.helper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attributes;
import org.jsoup.nodes.Document;

import java.util.List;
import java.util.stream.Collectors;

public class DomHelperImpl implements DomHelper {
  private Document document;

  public DomHelperImpl(Document document) {
    this.document = document;
  }

  @Override
  public List<DomHelper> getElementsByClassName(String classname) {
    return document
            .getElementsByClass(classname)
            .stream()
            .map(element -> new DomHelperImpl(Jsoup.parse(element.html())))
            .collect(Collectors.toList());
  }

  @Override
  public DomHelper getElementById(String id) {
    return new DomHelperImpl(Jsoup.parse(document.getElementById(id).html()));
  }

  @Override
  public List<DomHelper> children() {
    return document
            .children()
            .stream()
            .map(child -> new DomHelperImpl(Jsoup.parse(child.html())))
            .collect(Collectors.toList());
  }

  @Override
  public void addClass(String classname) {
    document.addClass(classname);
  }

  @Override
  public boolean hasClass(String classname) {
    return document.hasClass(classname);
  }

  @Override
  public String text() {
    return document.text();
  }

  @Override
  public String getAttr(String name) {
    Attributes attributes = document.attributes();
    return attributes.get(name);
  }

  @Override
  public void setAttr(String name, String value) {
    document.attr(name, value);
  }

  @Override
  public void append(String html) {
    document.append(html);
  }

  @Override
  public void empty() {
    document.empty();
  }
}
