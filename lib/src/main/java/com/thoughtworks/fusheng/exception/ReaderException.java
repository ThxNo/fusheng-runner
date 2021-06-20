package com.thoughtworks.fusheng.exception;

public class ReaderException extends RuntimeException {
  String errorMessage;

  public ReaderException() {
  }

  public ReaderException(String message) {
    super(message);
    this.errorMessage = message;
  }

  public String getErrorMessage() {
    return errorMessage;
  }
}
