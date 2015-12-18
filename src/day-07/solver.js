"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var fromStrings = require("./instructions").fromStrings;
var circuitSimulator = require("./circuit-simulator");

var instructions = fromStrings(readAllLines("day-7-input.txt"));

exports.solvePartOne = () => {
  return "Wire a has signal " + circuitSimulator.from(instructions).read("a");
};

exports.solvePartTwo = () => {
  let simulatedCircuit = circuitSimulator.from(instructions);
  simulatedCircuit.override("b", 3176);
  return "After override, wire a has signal " + simulatedCircuit.read("a");
};
