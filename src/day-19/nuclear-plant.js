"use strict";

let replacementsParser = require("./replacements");

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

exports.shortestSequenceStartingFromE = (targetMolecule, rawReplacements) => {
  let replacements = replacementsParser.from(rawReplacements);
  
  let firstLevelMolecules = generateAllMolecules("e", replacements);
  if (firstLevelMolecules.includes(targetMolecule)) {
    return 1;
  }
  for(let molecule of firstLevelMolecules) {
    let secondLevelMolecules = generateAllMolecules(molecule, replacements);
    if (secondLevelMolecules.includes(targetMolecule)) {
      return 2;
    }

    for(let molecule of secondLevelMolecules) {
      let thirdLevelMolecules = generateAllMolecules(molecule, replacements);
      if (thirdLevelMolecules.includes(targetMolecule)) {
        return 3;
      }
    }
  }
  throw new Error("Could not find a sequence of less than 4");
};
