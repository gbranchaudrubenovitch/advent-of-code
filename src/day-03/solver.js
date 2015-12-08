"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var santa = require("./santa");

var results = santa.deliverPresents(readAllLines("day-3-input.txt")[0]);

exports.solvePartOne = () => {
  return results.uniqueHousesVisited + " houses receive at least one present.";
};

exports.solvePartTwo = () => {
  return "TODO!!!!!!!";
};
