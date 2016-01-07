"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let reindeerRace = require("./reindeer-race");

let reindeerSpecs = readAllLines("day-14-input.txt");
let raceResults = reindeerRace.race(reindeerSpecs, 2503);

exports.solvePartOne = () => {
  return "After the race, the winning reindeer has traveled " + raceResults.winnerByDistance.distanceTraveled + " km";
};

exports.solvePartTwo = () => {
  return "After the race, the winning reindeer has " + raceResults.winnerByPoints.pointsAwarded + " points";
};
