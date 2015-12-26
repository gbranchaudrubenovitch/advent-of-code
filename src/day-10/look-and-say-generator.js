"use strict";

module.exports = class LookAndSayGenerator {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  iteration(numberOfIterations) {
    return this.initialValue + "1";
  }
};