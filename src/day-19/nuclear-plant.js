"use strict";

let replacementsParser = require("./replacements");

const MAX_LENGTH = 200;
const NOTHING_FOUND_AT_THIS_LENGTH = -1;

let buildNewMolecule = (originalMolecule, replacement, indexOfMatch) => {
  let leftPart = originalMolecule.substring(0, indexOfMatch);
  let rightPart = originalMolecule.substring(indexOfMatch + replacement.match.length);
  return leftPart + replacement.replacement + rightPart;
};

let generateAllMolecules = (startingMolecule, replacements) => {
  let allMolecules = new Set();

  for (let replacement of replacements) {
    let indexOfMatch = startingMolecule.indexOf(replacement.match);
    while (indexOfMatch >= 0) {
      let newMolecule = buildNewMolecule(startingMolecule, replacement, indexOfMatch);
      allMolecules.add(newMolecule);

      indexOfMatch = startingMolecule.indexOf(replacement.match, indexOfMatch + 1);
    }
  }
  return [...allMolecules];
};

exports.calibrate = (startingMolecule, rawReplacements) => {
  let replacements = replacementsParser.from(rawReplacements);

  let allTheMolecules = generateAllMolecules(startingMolecule, replacements);

  return {
    distinctMoleculesAfterOneReplacement: allTheMolecules
  };
};

exports.shortestSequenceStartingFromE = (targetMolecule) => {
  // using askalski's excellent solution: https://www.reddit.com/r/adventofcode/comments/3xflz8/day_19_solutions/cy4etju
  let totalElements = (targetMolecule.match(/([A-Z][a-z]?)/g) || []).length;
  let rnArTotal = (targetMolecule.match(/Rn|Ar/g) || []).length;
  let yTotal = (targetMolecule.match(/Y/g) || []).length;
  return totalElements - rnArTotal - 2 * yTotal - (yTotal > 0 ? 1 : 0);
};
