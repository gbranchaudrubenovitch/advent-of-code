"use strict";

let sueParser = require("./sue-parser");

let bestMatchingSue = (allMatchingSues, compoundsTheRightSueMustMatch) => {
  return allMatchingSues.reduce((previousSue, currentSue) => currentSue.numberOfMatchingCompounds > previousSue.numberOfMatchingCompounds ? currentSue : previousSue, allMatchingSues[0]);
};

let candidateIsAMatch = (candidateSue, compoundsTheRightSueMustMatch, considerInexactitude) => {
  let numberOfMatchingCompounds = 0;
  for (let compoundName in compoundsTheRightSueMustMatch) {
    let expectedValue = compoundsTheRightSueMustMatch[compoundName];
    let candidateValue = candidateSue[compoundName];
    if (!candidateValue) {
      continue;
    }

    let mustBeGreaterThan = considerInexactitude && (compoundName === "cats" || compoundName === "trees");
    if (mustBeGreaterThan) {
      if (candidateValue > expectedValue) {
        numberOfMatchingCompounds++;
        continue;
      }
      return false;
    }

    let mustBeSmallerThan = considerInexactitude && (compoundName === "goldfish" || compoundName === "pomeranians");
    if (mustBeSmallerThan) {
      if (candidateValue < expectedValue) {
        numberOfMatchingCompounds++;
        continue;
      }
      return false;
    }

    if (candidateValue === expectedValue) {
      numberOfMatchingCompounds++;
      continue;
    }
    return false;
  }

  if (numberOfMatchingCompounds === 0) {
    return false;
  }

  return {
    numberOfMatchingCompounds: numberOfMatchingCompounds
  };
};

let find = (rawSues, compoundsTheRightSueMustMatch, considerInexactitude) => {
  let allSues = sueParser.from(rawSues);
  let allMatches = [];
  for (let candidateSue of allSues) {
    let matchResult = candidateIsAMatch(candidateSue, compoundsTheRightSueMustMatch, considerInexactitude);
    if (matchResult) {
      candidateSue.numberOfMatchingCompounds = matchResult.numberOfMatchingCompounds;
      allMatches.push(candidateSue);
    }
  }

  return bestMatchingSue(allMatches, compoundsTheRightSueMustMatch).number;
};

exports.findTheRightSue = (rawSues, compoundsTheRightSueMustMatch) => {
  return find(rawSues, compoundsTheRightSueMustMatch, false);
};

exports.findTheRightSueTakingIntoAccountInexactitude = (rawSues, compoundsTheRightSueMustMatch) => {
  return find(rawSues, compoundsTheRightSueMustMatch, true);
};
