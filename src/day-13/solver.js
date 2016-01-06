"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let planner = require("./seating-arrangement-planner");

let rawSeatingPreferences = readAllLines("day-13-input.txt");

exports.solvePartOne = () => {
  return "The total happiness change for the optimal arrangement is " + planner.planOptimalArrangement(rawSeatingPreferences).totalHappinessChange;
};

exports.solvePartTwo = () => {
  return "TODO";
};
