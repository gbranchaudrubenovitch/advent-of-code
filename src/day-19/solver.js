"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let nuclearPlant = require("./nuclear-plant");

let allLines = readAllLines("day-19-input.txt");
let calibrationMolecule = allLines.pop();
let replacements = allLines;

exports.solvePartOne = () => {
  let numberOfDistinctMolecules = nuclearPlant.calibrate(calibrationMolecule, replacements).distinctMoleculesAfterOneReplacement.length; 
  return `There are ${numberOfDistinctMolecules} molecules that can be generated after 1 step`;
};

exports.solvePartTwo = () => {
  return `TODO`;
};
