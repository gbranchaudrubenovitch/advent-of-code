"use strict";

let ingredientsParser = require("./ingredients-parser");
let scoreCounter = require("./score-counter");

let newRecipe = (ingredientsToUse, quantitiesOfEach, score) => {
  return {
    ingredients: ingredientsToUse,
    quantity: quantitiesOfEach,
    score: score
  };
};

let buildRecipe = (ingredientsToUse, quantitiesOfEach) => {
  let recipe = newRecipe(ingredientsToUse, quantitiesOfEach);
  recipe.score = scoreCounter.scoreOf(recipe);

  return recipe;
};

let copyOf = (recipe) => {
  return newRecipe(recipe.ingredients.slice(), recipe.quantity.slice(), recipe.score);
};

let findOptimalRecipe = (currentRecipe, currentWinner, remainingIngredients) => {
  let recipeIsComplete = remainingIngredients.length === 0;
  if (recipeIsComplete) {
    currentRecipe.score = scoreCounter.scoreOf(currentRecipe);
    return currentRecipe.score > currentWinner.score ? currentRecipe : currentWinner;
  }

  let currentWeightOfRecipe = currentRecipe.quantity.reduce((runningSum, currentQuantity) => runningSum + currentQuantity, 0);
  let ingredientToAdd = remainingIngredients[0];
  let bestRecipeYet = currentWinner;
  for (let i = 1; i < 100; i++) {
    let recipeIsTooHeavy = currentWeightOfRecipe + i > 100;
    if (recipeIsTooHeavy) {
      continue;
    }

    let addingTheLastIngredientWontHitTargetWeight = remainingIngredients.length === 1 && currentWeightOfRecipe + i !== 100;
    if (addingTheLastIngredientWontHitTargetWeight) {
      continue;
    }

    let recipeToUpdate = copyOf(currentRecipe);
    recipeToUpdate.ingredients.push(ingredientToAdd);
    recipeToUpdate.quantity.push(i);

    bestRecipeYet = findOptimalRecipe(recipeToUpdate, bestRecipeYet, remainingIngredients.slice(1));
  }
  return bestRecipeYet;
};

exports.makeOptimalCookieWith = (rawAvailableIngredients) => {
  let availableIngredients = ingredientsParser.parse(rawAvailableIngredients);

  let emptyRecipe = buildRecipe([], []);
  return findOptimalRecipe(emptyRecipe, emptyRecipe, availableIngredients);
};
