"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var Santa = require("./santa");

var theSanta = new Santa();
theSanta.followInstructions(readAllLines("day-1-input.txt")[0]);

exports.solvePartOne = () => {
  return "Santa ends up on floor " + theSanta.currentFloor;
};

exports.solvePartTwo = () => {
  return "Santa first enters the basement at char " + theSanta.firstEnteredBasementAtChar;
};
