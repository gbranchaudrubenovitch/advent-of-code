"use strict";

let TravelingSanta = require("./traveling-santa");
let segments = require("./segments");
let readAllLines = require("../helpers/resources").readAllLines;

let travelingSanta = new TravelingSanta(segments.fromStrings(readAllLines("day-9-input.txt")));

exports.solvePartOne = () => {
  return "The distance of the shortest route is " + travelingSanta.computeLengthOfShortestRouteAcrossAllCities();
};

exports.solvePartTwo = () => {
  return "TODO";
};
