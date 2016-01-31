"use strict";

const A_MILLION_HOUSES = 1000000;

let fillAllHousesUntil = (minNumberOfPresentsToStop, fiftyVisitsMaxPerElf) => {
  let elfFactor = fiftyVisitsMaxPerElf ? 11 : 10;
  let lastElfNumber = minNumberOfPresentsToStop / 10;

  let houses = [];
  for (let elfNumber = 1; elfNumber <= lastElfNumber; elfNumber++) {
    let visits = 0;
    for (let houseNumber = elfNumber; houseNumber <= lastElfNumber; houseNumber += elfNumber) {
      visits++;
      if (fiftyVisitsMaxPerElf && visits > 50) {
        break;
      }

      let houseIndex = houseNumber - 1;
      if (!houses[houseIndex]) {
        houses[houseIndex] = 0;
      }
      houses[houseIndex] += elfNumber * elfFactor;
    }
  }

  for (let houseIndex = 0; houseIndex < houses.length; houseIndex++) {
    if (houses[houseIndex] >= minNumberOfPresentsToStop) {
      return houseIndex + 1;
    }
  }

  throw new Error(`could not find a house with at least ${minNumberOfPresentsToStop} presents in a million houses.`);
};

exports.firstHouseToReceiveAtLeast = (targetNumberOfGifts, fiftyVisitsMaxPerElf) => {
  return fillAllHousesUntil(targetNumberOfGifts, fiftyVisitsMaxPerElf);
};
