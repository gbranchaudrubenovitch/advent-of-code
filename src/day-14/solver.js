"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let reindeerRace = require("./reindeer-race");

let reindeerSpecs = readAllLines("day-14-input.txt");

exports.solvePartOne = () => {
  return "After 2503 seconds, the winning reindeer has traveled " + reindeerRace.race(reindeerSpecs, 2503).winningReindeer.distanceTraveled + " km";
};

exports.solvePartTwo = () => {
  return "TODO";
};
