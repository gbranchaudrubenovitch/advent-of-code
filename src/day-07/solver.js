"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var fromStrings = require("./instructions").fromStrings;
var circuitSimulator = require("./circuit-simulator");

var instructions = fromStrings(readAllLines("day-7-input.txt"));

exports.solvePartOne = () => {
  return "Wire a has signal " + circuitSimulator.fromInstructions(instructions).a;
};

exports.solvePartTwo = () => {
  return "TODO";
};
