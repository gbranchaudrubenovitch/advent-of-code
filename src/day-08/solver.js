"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let charCounter = require("./character-counter");

let results = charCounter.count(readAllLines("day-8-input.txt"));

exports.solvePartOne = () => {
  let difference = results.totalNumberOfCodeChars - results.totalNumberOfInMemoryChars;
  return "code chars - in-memory chars = " + difference;
};

exports.solvePartTwo = () => {
  let difference = results.totalNumberOfCharsInEncodedForm - results.totalNumberOfCodeChars;
  return "encoded chars - code chars = " + difference;
};
