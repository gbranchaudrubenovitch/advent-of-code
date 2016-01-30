"use strict";

exports.fill = (houseNumber) => {
  let presentsInTheHouse = 0;

  for(let elfNumber = 1; elfNumber <= houseNumber; elfNumber++) {
    let elfShouldNotVisitThisHouse = houseNumber % elfNumber !== 0;
    if (elfShouldNotVisitThisHouse) {
      continue;
    }
    presentsInTheHouse += 10 * elfNumber;
  }
  return presentsInTheHouse;
};
