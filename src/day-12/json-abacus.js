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

var applyACheapRegexAndFindAllNumbersIn = (document) => {
 let matches = document.match(numbersRegex);
 if (!matches) {
   return [];
 }
 return matches;
};