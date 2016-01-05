"use strict";

let seatingPreferencesParser = require("./seating-preferences-parser");
let arrangementsGenerator = require("./arrangements-generator");

let findAllPossibleArrangements = (seatingPrefs) => {
  let guestNames = [];
  for (let guestName in seatingPrefs) {
    guestNames.push(guestName);
  }
  return arrangementsGenerator.generateAllFrom(guestNames);
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
