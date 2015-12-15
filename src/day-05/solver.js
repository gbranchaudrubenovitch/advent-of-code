"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var filter = require("./filter");

var strings = readAllLines("day-5-input.txt");

exports.solvePartOne = () => {
  return filter.countNiceStrings(strings) + " strings are nice";
};

exports.solvePartTwo = () => {
  return filter.countNiceStringsWithNewRules(strings) + " strings are nice under the new rules";
};
