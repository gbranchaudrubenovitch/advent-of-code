"use strict";

let ingredientsParser = require("./ingredients-parser");
let scoreCounter = require("./score-counter");

let buildRecipe = (ingredientsToUse, quantitiesOfEach) => {
  let recipe = {
    ingredients: ingredientsToUse,
    quantity: quantitiesOfEach
  };
  recipe.score = scoreCounter.scoreOf(recipe);

  return recipe;
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
    for (let j = 1; j < 100; j++) {
      if (i + j !== 100) {
        continue;
      }

      let candidateRecipe = buildRecipe(availableIngredients, [i, j]);

      if (candidateRecipe.score > winningRecipe.score) {
        winningRecipe = candidateRecipe;
      }
    }
  }

  return winningRecipe;
};
