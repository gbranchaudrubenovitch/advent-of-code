"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var charCounter = require("./character-counter");

var strings = readAllLines("day-8-input.txt");
console.log(strings[2]);

exports.solvePartOne = () => {
  let results = charCounter.count(strings);
  let difference = results.totalNumberOfCodeChars - results.totalNumberOfInMemoryChars;
  return "code chars - in-memory chars = " + difference;
};

exports.solvePartTwo = () => {
  return "TODO!";
};
