"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var presents = require("./presents-builder");
var WrapperComputer = require("./wrapper-computer");

var computer = new WrapperComputer().loadPresents(...presents.fromLines(readAllLines("day-2-input.txt")));

exports.solvePartOne = () => {
  return "Elves should order " + computer.paperSurfaceRequired + " square feet of wrapping paper.";
};

exports.solvePartTwo = () => {
  return "Elves should order " + computer.ribbonLengthRequired + " feet of ribbon.";
};
