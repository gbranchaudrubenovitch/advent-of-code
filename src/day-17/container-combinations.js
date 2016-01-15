"use strict";

let Combinatorics = require('js-combinatorics');
let containerParser = require("./container-parser");

exports.fittingExactly = (targetLiters, rawContainers) => {
  let allContainers = containerParser.from(rawContainers);
  let allCombinationsFitting150L = [];

  for (let numberOfContainersToTry = 1; numberOfContainersToTry <= allContainers.length; numberOfContainersToTry++) {
    let allCombinations = Combinatorics.combination(allContainers, numberOfContainersToTry).toArray();

    for (let candidateCombination of allCombinations) {
      let litersThatCombinationCanStore = candidateCombination.reduce((previousValue, currentValue) => previousValue + currentValue);

      if (litersThatCombinationCanStore === targetLiters) {
        allCombinationsFitting150L.push(candidateCombination);
      }
    }
  }

  return allCombinationsFitting150L.length;
};
