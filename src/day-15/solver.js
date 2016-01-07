"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let cookieMaker = require("./cookie-maker");

let availableIngredients = readAllLines("day-15-input.txt");

exports.solvePartOne = () => {
  return "The highest-scoring cookie has a score of " + cookieMaker.makeOptimalCookieWith(availableIngredients).score;
};

exports.solvePartTwo = () => {
  return "TODO";
};
