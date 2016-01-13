"use strict";

let ingredientsParser = require("./ingredients-parser");
let scoreCounter = require("./score-counter");

let buildIncompleteRecipe = (ingredientsToUse, quantitiesOfEach) => {
  return {
    ingredients: ingredientsToUse,
    quantity: quantitiesOfEach
  };
};

let buildRecipe = (ingredientsToUse, quantitiesOfEach) => {
  let recipe = buildIncompleteRecipe(ingredientsToUse, quantitiesOfEach);
  recipe.score = scoreCounter.scoreOf(recipe);

  return recipe;
};

let copyOf = (recipe) => {
  return buildIncompleteRecipe(recipe.ingredients.slice(), recipe.quantity.slice());
};

let findOptimalRecipe = (currentRecipe, currentWinner, remainingIngredients) => {
  if (remainingIngredients.length === 0) {
    currentRecipe.score = scoreCounter.scoreOf(currentRecipe);
    return currentRecipe.score > currentWinner.score ? currentRecipe : currentWinner;
  }

  let updatedWinner = currentWinner;
  let ingredientToAdd = remainingIngredients[0];
  for (let i = 1; i < 100; i++) {
    if (remainingIngredients.length === 1) {
      let currentWeightOfRecipe = currentRecipe.quantity.reduce((runningSum, currentQuantity) => runningSum + currentQuantity, 0);
      if (currentWeightOfRecipe + i !== 100) {
        continue;
      }
    }

    let updatedRecipe = copyOf(currentRecipe);
    updatedRecipe.ingredients.push(ingredientToAdd);
    updatedRecipe.quantity.push(i);
    updatedWinner = findOptimalRecipe(updatedRecipe, updatedWinner, remainingIngredients.slice(1));
  }
  return updatedWinner;
};

exports.makeOptimalCookieWith = (rawAvailableIngredients) => {
  let availableIngredients = ingredientsParser.parse(rawAvailableIngredients);

  let emptyRecipe = buildRecipe([], []);
  return findOptimalRecipe(emptyRecipe, emptyRecipe, availableIngredients);
};
