"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let nuclearPlant = require("./nuclear-plant");

let allLines = readAllLines("day-19-input.txt");
let medecineMolecule = allLines.pop();
let replacements = allLines;

exports.solvePartOne = () => {
  let numberOfDistinctMolecules = nuclearPlant.calibrate(medecineMolecule, replacements).distinctMoleculesAfterOneReplacement.length;
  return `There are ${numberOfDistinctMolecules} molecules that can be generated after 1 step`;
};

exports.solvePartTwo = () => {
  let shortestSequence = nuclearPlant.shortestSequenceStartingFromE(medecineMolecule);
  return `The shortest sequence to build the molecule is ${shortestSequence} steps`;
};
