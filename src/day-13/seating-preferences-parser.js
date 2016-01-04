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
    guest: matches[1],
    nextTo: matches[4],
    happinessChange: isLoss ? -1 * absoluteHappinessChange : absoluteHappinessChange
  };
};

exports.fromStrings = (rawSeatingPreferences) => {
  return rawSeatingPreferences.map((rawPref) => parsePreference(rawPref));
};
