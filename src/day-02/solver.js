"use strict";
var lines = require("../helpers/lines");
var presents = require("./presents-builder");
var wrapperComputer = require("./wrapper-computer");

var allPresents = presents.fromLines(lines.fromResource("day-2-input.txt"));

exports.solvePartOne = () => {
  return "Elves should order " + wrapperComputer.surfaceRequiredFor(...allPresents) + " square foot of wrapping paper.";
};
