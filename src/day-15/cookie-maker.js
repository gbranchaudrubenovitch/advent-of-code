"use strict";

let ingredientsParser = require("./ingredients-parser");
let scoreCounter = require("./score-counter");


let makeCookieWith = (firstIngredient, firstQuantity, secondIngredient, secondQuantity) => {
  let quantity = {};
  quantity[firstIngredient.name] = firstQuantity;
  quantity[secondIngredient.name] = secondQuantity;

  let recipe = {
    ingredients: [firstIngredient, secondIngredient],
    quantity: [firstQuantity, secondQuantity]
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
