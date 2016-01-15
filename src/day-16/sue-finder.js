"use strict";

let sueParser = require("./sue-parser");

let candidateIsAMatch = (candidateSue, compoundsTheRightSueMustMatch) => {
  for(let compoundName in compoundsTheRightSueMustMatch) {
    let candidateValue = candidateSue[compoundName];
    let expectedValue = compoundsTheRightSueMustMatch[compoundName];

    if (candidateValue !== undefined && candidateValue !== expectedValue) {
      return false;
    }
  }
  return true;
};

exports.findTheRightSue = (rawSues, compoundsTheRightSueMustMatch) => {
  let allSues = sueParser.from(rawSues);
  for(let candidateSue of allSues) {
    if (candidateIsAMatch(candidateSue, compoundsTheRightSueMustMatch)) {
      return candidateSue.number;
    }
  }
  throw new Error("could not find the right Sue");
};
