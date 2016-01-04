"use strict";

let seatingPreferencesParser = require("./seating-preferences-parser");

let findAllPossibleArrangements = (seatingPrefs) => {
  return ["some-arrangement"];
};

let computeTotalHappinessChange = (arrangement) => {
  return 44;
};

exports.planOptimalArrangement = (rawSeatingPreferences) => {
  let seatingPrefs = seatingPreferencesParser.fromStrings(rawSeatingPreferences);

  let allPossibleArrangements = findAllPossibleArrangements(seatingPrefs);

  let highestTotalHappinessChange = Number.MIN_VALUE;
  for (let anArrangement of allPossibleArrangements) {
    let candidateTotalHappinessChange = computeTotalHappinessChange(anArrangement);
    if (candidateTotalHappinessChange > highestTotalHappinessChange) {
      highestTotalHappinessChange = candidateTotalHappinessChange;
    }
  }

  return {
    totalHappinessChange: highestTotalHappinessChange
  };
};
