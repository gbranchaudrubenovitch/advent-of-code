"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let gridAnimator = require("./grid-animator");

let initialGrid = readAllLines("day-18-input.txt");

exports.solvePartOne = () => {
  return `After 100 steps, ${gridAnimator.animateGrid(initialGrid, 100).turnedOnLights} lights are on`;
};

exports.solvePartTwo = () => {
  return "TODO";
};
