"use strict";

var readAllLines = require("../helpers/resources").readAllLines;
var santa = require("./santa");

var instructions = readAllLines("day-3-input.txt")[0];

exports.solvePartOne = () => {
  return santa.deliverPresentsAlone(instructions).uniqueHousesVisited + " houses receive at least one present.";
};

exports.solvePartTwo = () => {
  return "With Robo-Santa, " + santa.deliverPresentsWithRobot(instructions).uniqueHousesVisited + " houses receive at least one present.";
};
