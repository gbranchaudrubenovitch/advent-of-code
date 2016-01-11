"use strict";

let ingredientsParser = require("./ingredients-parser");

let positiveOnly = (number) => Math.max(0, number);

let computeScoreOfRecipe = (firstIngredient, firstQuantity, secondIngredient, secondQuantity) => {
  let capacitySum = positiveOnly(firstQuantity * firstIngredient.capacity + secondQuantity * secondIngredient.capacity);
  let durabilitySum = positiveOnly(firstQuantity * firstIngredient.durability + secondQuantity * secondIngredient.durability);
  let flavorSum = positiveOnly(firstQuantity * firstIngredient.flavor + secondQuantity * secondIngredient.flavor);
  let textureSum = positiveOnly(firstQuantity * firstIngredient.texture + secondQuantity * secondIngredient.texture);

  return capacitySum * durabilitySum * flavorSum * textureSum;
};

let makeCookieWith = (firstIngredient, firstQuantity, secondIngredient, secondQuantity) => {
  let quantity = {};
  quantity[firstIngredient.name] = firstQuantity;
  quantity[secondIngredient.name] = secondQuantity;

  return {
    quantity: quantity,
    score: computeScoreOfRecipe(firstIngredient, firstQuantity, secondIngredient, secondQuantity)
  };
};

exports.makeOptimalCookieWith = (rawAvailableIngredients) => {
  let availableIngredients = ingredientsParser.parse(rawAvailableIngredients);
  if (availableIngredients.length != 2) {
    throw new Error("this prototype only supports 2 ingredients");
  }

  let winningRecipe = {
    score: 0
  };

  for (let i = 1; i < 100; i++) {
    for (let j = 99; j > 0; j--) {
      if (i + j !== 100) {
        continue;
      }

      let candidateRecipe = makeCookieWith(availableIngredients[0], i, availableIngredients[1], j);

      if (candidateRecipe.score > winningRecipe.score) {
        winningRecipe = candidateRecipe;
      }
    }
  }

  return winningRecipe;
};
