"use strict";

let Combinatorics = require('js-combinatorics');
let containerParser = require("./container-parser");

exports.fittingExactly = (targetLiters, rawContainers, minimizeContainerCount) => {
  let allContainers = containerParser.from(rawContainers);
  let allFittingCombinations = [];
  let shortestCombinationLength = allContainers.length;

  for (let numberOfContainersToTry = 1; numberOfContainersToTry <= allContainers.length; numberOfContainersToTry++) {
    let allCombinations = Combinatorics.combination(allContainers, numberOfContainersToTry).toArray();

    for (let candidateCombination of allCombinations) {
      let litersThatCombinationCanStore = candidateCombination.reduce((previousValue, currentValue) => previousValue + currentValue);

      if (litersThatCombinationCanStore === targetLiters) {
        allFittingCombinations.push(candidateCombination);
        if (candidateCombination.length < shortestCombinationLength) {
          shortestCombinationLength = candidateCombination.length;
        }
      }
    }
  }

  if (minimizeContainerCount) {
    return allFittingCombinations.filter(c => c.length === shortestCombinationLength).length;
  } else {
    return allFittingCombinations.length;
  }
};
