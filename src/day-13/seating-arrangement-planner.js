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

let computeTotalHappinessChange = (arrangement, seatingPrefs) => {
  let ignoreRightNeighborBecauseItsTheSameAsTheLeftOne = arrangement.length === 2;

  let totalHappinessChange = 0;
  for (let i = 0; i < arrangement.length; i++) {
    let currentGuestName = arrangement[i];
    let leftNeighborName = i === 0 ? arrangement[arrangement.length - 1] : arrangement[i - 1];
    let rightNeighborName = i === arrangement.length - 1 ? arrangement[0] : arrangement[i + 1];

    totalHappinessChange += seatingPrefs[currentGuestName].nextTo[leftNeighborName].happinessChange;
    totalHappinessChange += ignoreRightNeighborBecauseItsTheSameAsTheLeftOne ? 0 : seatingPrefs[currentGuestName].nextTo[rightNeighborName].happinessChange;
  }
  return totalHappinessChange;
};

let computeOptimalArrangement = (seatingPrefs) => {
  let allPossibleArrangements = findAllPossibleArrangements(seatingPrefs);

  let highestTotalHappinessChange = Number.MIN_VALUE;
  for (let anArrangement of allPossibleArrangements) {
    let candidateTotalHappinessChange = computeTotalHappinessChange(anArrangement, seatingPrefs);
    if (candidateTotalHappinessChange > highestTotalHappinessChange) {
      highestTotalHappinessChange = candidateTotalHappinessChange;
    }
  }

  return {
    totalHappinessChange: highestTotalHappinessChange
  };
};

let addYourselfToTheSeatingPreferences = (rawSeatingPreferences) => {
  let noChange = {
    happinessChange: 0
  };

  let seatingPrefs = seatingPreferencesParser.fromStrings(rawSeatingPreferences);

  seatingPrefs.Me = {
    name: "Me",
    nextTo: {}
  };

  for (let guestName in seatingPrefs) {
    if (guestName === "Me") {
      continue;
    }
    seatingPrefs.Me.nextTo[guestName] = noChange;
    seatingPrefs[guestName].nextTo.Me = noChange;
  }
  return seatingPrefs;
};

exports.planOptimalArrangement = (rawSeatingPreferences) => {
  let seatingPrefs = seatingPreferencesParser.fromStrings(rawSeatingPreferences);
  return computeOptimalArrangement(seatingPrefs);
};

exports.planOptimalArrangementIncludingYou = (rawSeatingPreferences) => {
  let seatingPrefs = addYourselfToTheSeatingPreferences(rawSeatingPreferences);
  return computeOptimalArrangement(seatingPrefs);
};
