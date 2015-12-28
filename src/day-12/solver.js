"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let jsonAbacus = require("./json-abacus");

let document = readAllLines("day-12-input.txt")[0];

exports.solvePartOne = () => {
  return "The sum of all numbers in the json document is " + jsonAbacus.sumAllNumbers(document);
};

exports.solvePartTwo = () => {
  return "The sum of all numbers, excluding the red ones, is " + jsonAbacus.sumAllNonRedNumbers(document);
};
