"use strict";

const numbersRegex = /-?\d+/g;

exports.sumAllNumbers = (document) => {
  let runningSum = 0;

  let rawNumbers = applyACheapRegexAndFindAllNumbersIn(document);
  for(let i = 0; i < rawNumbers.length; i++) {
    let number = parseInt(rawNumbers[i], 10);
    runningSum += number;
  }
  return runningSum;
};

exports.sumAllNonRedNumbers = (document) => {
  let root = JSON.parse(document);
  return countValue(root);
};

var applyACheapRegexAndFindAllNumbersIn = (document) => {
 let matches = document.match(numbersRegex);
 if (!matches) {
   return [];
 }
 return matches;
};

var countValue = (valueToCount) => {
  if (Array.isArray(valueToCount)) {
    return countNonRedNumbersInArray(valueToCount);
  } else if (typeof valueToCount === "object") {
    return countNonRedNumbersInObject(valueToCount);
  } else if (typeof valueToCount === "number") {
    return valueToCount;
  } else if (typeof valueToCount === "string") {
    return 0;
  }
  throw new Error("unsupported value:" + JSON.stringify(valueToCount));
};

var countNonRedNumbersInArray = (arr) => {
  let sum = 0;
  for(let item of arr) {
    sum += countValue(item);
  }
  return sum;
};

var countNonRedNumbersInObject = (obj) => {
  let sum = 0;
  for (let key in obj) {
    let value = obj[key];

    if (value === "red") {
      return 0;
    }
    sum += countValue(value);
  }
  return sum;
};
