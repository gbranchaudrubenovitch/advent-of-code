"use strict";

var fromResource = require("../helpers/lines").fromResource;
var Santa = require("./santa");

var theSanta = new Santa();
theSanta.followInstructions(fromResource("day-1-input.txt")[0]);

exports.solvePartOne = () => {
  return "Santa ends up on floor " + theSanta.currentFloor;
};

exports.solvePartTwo = () => {
  return "Santa first enters the basement at char " + theSanta.firstEnteredBasementAtChar;
};
