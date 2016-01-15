"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let containerCombinations = require("./container-combinations");

let containers = readAllLines("day-17-input.txt");

exports.solvePartOne = () => {
  return `${containerCombinations.fittingExactly(150, containers, false)} combinations of containers can fit 150 liters`;
};

exports.solvePartTwo = () => {
  return `When minizing container count, only ${containerCombinations.fittingExactly(150, containers, true)} still fit`;
};
