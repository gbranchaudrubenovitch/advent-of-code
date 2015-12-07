"use strict";
var readAllLines = require("../helpers/resources").readAllLines;
var presents = require("./presents-builder");
var wrapperComputer = require("./wrapper-computer");

var allPresents = presents.fromLines(readAllLines("day-2-input.txt"));

exports.solvePartOne = () => {
  return "Elves should order " + wrapperComputer.surfaceRequiredFor(...allPresents) + " square foot of wrapping paper.";
};
