"use strict";

const OF_A_MILLION_HOUSES = 1000000;

let houseFiller = require("./house-filler");

let fillHousesUntil = (minNumberOfPresentsToStop) => {
  let presentsInHouses = new Array(OF_A_MILLION_HOUSES);
  for (let houseIndex = 0; houseIndex < presentsInHouses.length; houseIndex++) {
    let houseNumber = houseIndex + 1;

    presentsInHouses[houseIndex] = houseFiller.fill(houseNumber);
    if (presentsInHouses[houseIndex] >= minNumberOfPresentsToStop) {
      return houseNumber;
    }
    if (houseNumber % 1000 === 0) {
      console.log("House #" + houseNumber + " is done.");
    }
  }
  throw new Error(`could not find a house with at least ${minNumberOfPresentsToStop} presents in ${presentsInHouses.length} houses.`);
};

exports.firstHouseToReceiveAtLeast = (targetNumberOfGifts) => {
  return fillHousesUntil(targetNumberOfGifts);
};
