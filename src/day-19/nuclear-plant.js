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
