"use strict";

const numbersRegex = /-?\d+/g;

exports.sumAllNumbers = (document) => {
  return new Counter(false).countValue(JSON.parse(document));
};

exports.sumAllNonRedNumbers = (document) => {
  return new Counter(true).countValue(JSON.parse(document));
};

var Counter = class Counter {
  constructor(skipRedNumbers) {
    this.skipRedNumbers = skipRedNumbers;
  }

  countValue(valueToCount) {
    if (Array.isArray(valueToCount)) {
      return this.countNumbersInArray(valueToCount);
    } else if (typeof valueToCount === "object") {
      return this.countNumbersInObject(valueToCount);
    } else if (typeof valueToCount === "number") {
      return valueToCount;
    } else {
      return 0;
    }
  }

  countNumbersInObject(obj) {
    let sum = 0;
    for (let key in obj) {
      let value = obj[key];

      if (this.skipRedNumbers && value === "red") {
        return 0;
      }
      sum += this.countValue(value);
    }
    return sum;
  }

  countNumbersInArray(arr) {
    let sum = 0;
    for (let item of arr) {
      sum += this.countValue(item);
    }
    return sum;
  }
};
