"use strict";

exports.fill = (houseNumber, fiftyVisitsMaxPerElf) => {
  let presentsInTheHouse = 0;
  let elfFactor = fiftyVisitsMaxPerElf ? 11 : 10;

  for (let elfNumber = 1; elfNumber <= houseNumber; elfNumber++) {
    let elfShouldNotVisitThisHouse = (fiftyVisitsMaxPerElf && houseNumber > 50 * elfNumber) || houseNumber % elfNumber !== 0;
    if (elfShouldNotVisitThisHouse) {
      continue;
    }
    presentsInTheHouse += elfFactor * elfNumber;
  }
  return presentsInTheHouse;
};
