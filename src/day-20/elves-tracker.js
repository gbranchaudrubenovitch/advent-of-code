"use strict";

const A_MILLION_HOUSES = 1000000;

let houseFiller = require("./house-filler");

let fillAllHousesUntil = (minNumberOfPresentsToStop, fiftyVisitsMaxPerElf) => {
  for (let houseIndex = 0; houseIndex < A_MILLION_HOUSES; houseIndex++) {
    let houseNumber = houseIndex + 1;

    let presentsInHouse = houseFiller.fill(houseNumber, fiftyVisitsMaxPerElf);
    if (presentsInHouse >= minNumberOfPresentsToStop) {
      return houseNumber;
    }

    if (houseNumber % 1000 === 0) {
      console.log("House #" + houseNumber + " is done.");
    }
  }
  throw new Error(`could not find a house with at least ${minNumberOfPresentsToStop} presents in a million houses.`);
};

exports.firstHouseToReceiveAtLeast = (targetNumberOfGifts, fiftyVisitsMaxPerElf) => {
  return fillAllHousesUntil(targetNumberOfGifts, fiftyVisitsMaxPerElf);
};
