"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var lightGrid = require("./light-grid");
var fromStrings = require("./instructions").fromStrings;

var instructions = readAllLines("day-6-input.txt");

exports.solvePartOne = () => {
  return "There are " + lightGrid.follow(fromStrings(instructions)).numberOfLitLights + " lit lights";
};

exports.solvePartTwo = () => {
  return "TODO";
};
