"use strict";

var lines = require("./helpers/lines");
var presents = require("./helpers/presents");

var requiredSlack = (surfaceA, surfaceB, surfaceC) => {
  return Math.min(surfaceA, surfaceB, surfaceC);
};

var surfaceRequiredForSinglePresent = (present) => {
  var surfaceA = present.length * present.width;
  var surfaceB = present.width * present.height;
  var surfaceC = present.height * present.length;
  return 2 * surfaceA + 2 * surfaceB + 2 * surfaceC + requiredSlack(surfaceA, surfaceB, surfaceC);
};

exports.surfaceRequiredFor = (...presents) => {
  var runningTotal = 0;
  for (let p of presents) {
    runningTotal += surfaceRequiredForSinglePresent(p);
  }
  return runningTotal;
};

exports.solvePartOne = () => {
  var allPresents = presents.fromLines(lines.fromResource("day-2-input.txt"));
  return "Elves should order " + this.surfaceRequiredFor(...allPresents) + " square foot of wrapping paper.";
};
