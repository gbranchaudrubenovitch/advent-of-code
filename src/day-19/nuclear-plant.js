"use strict";

let replacementsParser = require("./replacements");

const MAX_LENGTH = 200;
const NOTHING_FOUND_AT_THIS_LENGTH = -1;

let buildNewMolecule = (originalMolecule, replacement, indexOfMatch) => {
  let leftPart = originalMolecule.substring(0, indexOfMatch);
  let rightPart = originalMolecule.substring(indexOfMatch + replacement.match.length);
  return leftPart + replacement.replacement + rightPart;
}

let generateAllMolecules = (startingMolecule, replacements) => {
  let allMolecules = new Set();

  for(let replacement of replacements) {
    let indexOfMatch = startingMolecule.indexOf(replacement.match); 
    while(indexOfMatch >= 0) {
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

let moleculeLooksLikeTarget = (molecule, target) => {
  return true;  // todo: code the potential optimization
};

let tryAllMolecules = function (moleculesToTry, targetMolecule, replacements, currentLength) {
  if (currentLength > MAX_LENGTH) {
    return NOTHING_FOUND_AT_THIS_LENGTH;
  }

  if (moleculesToTry.includes(targetMolecule)) {
    return currentLength;
  }

  if (moleculesToTry[0].length >= targetMolecule.length) {
    return NOTHING_FOUND_AT_THIS_LENGTH;
  }

  for(let molecule of moleculesToTry) {
    if (!moleculeLooksLikeTarget(molecule, targetMolecule)) {
      continue;
    }

    let childrenMolecules = generateAllMolecules(molecule, replacements);

    let completeSequenceFoundAt = tryAllMolecules(childrenMolecules, targetMolecule, replacements, currentLength + 1);
    if (completeSequenceFoundAt === NOTHING_FOUND_AT_THIS_LENGTH) {
      continue;
    }
    return completeSequenceFoundAt;
  }
  return NOTHING_FOUND_AT_THIS_LENGTH;
};

exports.shortestSequenceStartingFromE = (targetMolecule, rawReplacements) => {
  let replacements = replacementsParser.from(rawReplacements);

  return tryAllMolecules(["e"], targetMolecule, replacements, 0);
};
