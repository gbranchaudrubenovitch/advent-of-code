"use strict";

module.exports = class LookAndSayGenerator {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  iteration(numberOfIterations) {
    let previousValue = this.initialValue;
    for(let i = 0; i < numberOfIterations; i++) {
      previousValue = this.computeNextIteration(previousValue);
    }
    return previousValue;
  }
  
  computeNextIteration(previousValue) {
    let computeNextDigit = (digits, currentIndex, offset) => currentIndex + offset < digits.length ? digits[currentIndex + offset] : -1;

    let nextIteration = "";
    let digits = previousValue.split("");

    for(let i = 0; i < digits.length; i++) {
      let currentDigit = digits[i];
      let numberOfRepetitions = 1;

      let nextDigit = computeNextDigit(digits, i, numberOfRepetitions);
      while (nextDigit === currentDigit) {
        numberOfRepetitions++;
        nextDigit = computeNextDigit(digits, i, numberOfRepetitions);
      }

      nextIteration += numberOfRepetitions.toString() + currentDigit.toString();
      i += numberOfRepetitions - 1;
    }
    return nextIteration;
  }
};