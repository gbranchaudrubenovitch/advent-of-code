"use strict";

const preferenceRegex = /(.*) would (gain|lose) (\d*) happiness units by sitting next to (.*)\./;

let parsePreference = (rawPreference) => {
  let matches = preferenceRegex.exec(rawPreference);
  if (matches === null) {
    throw new Error("Seating Preference is badly formed. | " + rawPreference);
  }

  let isLoss = matches[2] === "lose";
  let absoluteHappinessChange = parseInt(matches[3], 10);

  return {
    guestName: matches[1],
    nextTo: matches[4],
    happinessChange: isLoss ? -1 * absoluteHappinessChange : absoluteHappinessChange
  };
};

let mergePreferences = (parsedPreferences) => {
  let mergedPrefs = {};
  for (let parsedPref of parsedPreferences) {
    let guestPrefs = mergedPrefs[parsedPref.guestName];
    if (!guestPrefs) {
      guestPrefs = {};
      guestPrefs.name = parsedPref.guestName;
      mergedPrefs[parsedPref.guestName] = guestPrefs;
    }

    let preferencesList = guestPrefs.nextTo;
    if (!preferencesList) {
      preferencesList = {};
      guestPrefs.nextTo = preferencesList;
    }

    preferencesList[parsedPref.nextTo] = {
      happinessChange: parsedPref.happinessChange
    };
  }
  return mergedPrefs;
};

exports.fromStrings = (rawSeatingPreferences) => {
  let parsedPreferences = rawSeatingPreferences.map((rawPref) => parsePreference(rawPref));
  return mergePreferences(parsedPreferences);
};
