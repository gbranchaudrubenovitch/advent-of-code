"use strict";

let ingredientsParser = require("./ingredients-parser");

let computeScoreOfRecipe = (firstIngredient, firstQuantity, secondIngredient, secondQuantity) => {
  let capacitySum = firstIngredient.capacity * firstQuantity + secondIngredient.capacity * secondQuantity;
  let durabilitySum = firstIngredient.durability * firstQuantity + secondIngredient.durability * secondQuantity;
  let flavorSum = firstIngredient.flavorSum * firstQuantity + secondIngredient.flavorSum * secondQuantity;
  let textureSum = firstIngredient.texture * firstQuantity + secondIngredient.texture * secondQuantity;

  return capacitySum * durabilitySum * flavorSum * textureSum;
};

exports.makeOptimalCookieWith = (rawAvailableIngredients) => {
  let availableIngredients = ingredientsParser.parse(rawAvailableIngredients);
  if (availableIngredients.length != 2) {
    throw new Error("this prototype only supports 2 ingredients");
  }

  let highestScore = 0;
  for (let i = 0; i <= 100; i++) {
    for (let j = 100; j <= 0; j--) {
      if (i + j > 100) {
        console.log("too big!");
        continue;
      }

      let candidateScore = computeScoreOfRecipe(availableIngredients[0], i, availableIngredients[1], j);
      if (candidateScore > highestScore) {
        highestScore = candidateScore;
      }
    }
  }

  return {
    score: highestScore
  };
};
