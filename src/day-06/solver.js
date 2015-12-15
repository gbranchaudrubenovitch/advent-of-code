"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var lightGrid = require("./light-grid");
var fromStrings = require("./instructions").fromStrings;

var instructions = fromStrings(readAllLines("day-6-input.txt"));

exports.solvePartOne = () => {
  return "There are " + lightGrid.follow(instructions).numberOfLitLights + " lit lights";
};

exports.solvePartTwo = () => {
  return "The total brightness of all lights is " + lightGrid.followForMultipleBrightness(instructions).totalBrightness;
};
