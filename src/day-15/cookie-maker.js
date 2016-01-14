"use strict";

let ingredientsParser = require("./ingredients-parser");
let scoreCounter = require("./score-counter");
let calorieCounter = require("./calorie-counter");

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

let findOptimalRecipe = (currentRecipe, currentWinner, remainingIngredients, limitTo500Calories) => {
  let recipeIsComplete = remainingIngredients.length === 0;
  if (recipeIsComplete) {
    currentRecipe.score = scoreCounter.scoreOf(currentRecipe);
    return currentRecipe.score > currentWinner.score ? currentRecipe : currentWinner;
  }

  let currentWeightOfRecipe = currentRecipe.quantity.reduce((runningSum, currentQuantity) => runningSum + currentQuantity, 0);
  let currentCalorieCountOfRecipe = limitTo500Calories ? calorieCounter.caloriesOf(currentRecipe) : -1;

  let ingredientToAdd = remainingIngredients[0];
  let bestRecipeYet = currentWinner;
  for (let i = 1; i < 100; i++) {
    let newWeight = currentWeightOfRecipe + i;
    let recipeIsTooHeavy = newWeight > 100;
    if (recipeIsTooHeavy) {
      continue;
    }

    let newCalorieCount = currentCalorieCountOfRecipe + i * ingredientToAdd.calories;
    if (limitTo500Calories &&  newCalorieCount > 500) {
        continue;
    }

    let aboutToAddLastIngredient = remainingIngredients.length === 1;
    if (aboutToAddLastIngredient) {
      let weightWontHitTarget = newWeight !== 100;
      let caloriesWontHitTarget = limitTo500Calories && newCalorieCount !== 500;
      if (weightWontHitTarget || caloriesWontHitTarget) {
        continue;
      }
    }

    let recipeToUpdate = copyOf(currentRecipe);
    recipeToUpdate.ingredients.push(ingredientToAdd);
    recipeToUpdate.quantity.push(i);

    bestRecipeYet = findOptimalRecipe(recipeToUpdate, bestRecipeYet, remainingIngredients.slice(1), limitTo500Calories);
  }
  return bestRecipeYet;
};

let launchOptimalCookieSearch = (rawAvailableIngredients, limitTo500Calories) => {
  let availableIngredients = ingredientsParser.parse(rawAvailableIngredients);

  let emptyRecipe = newRecipe([], [], 0);
  return findOptimalRecipe(emptyRecipe, emptyRecipe, availableIngredients, limitTo500Calories);
};

exports.makeOptimalCookieWith = (rawAvailableIngredients) => {
  return launchOptimalCookieSearch(rawAvailableIngredients);
};

exports.makeOptimal500CaloriesCookieWith = (rawAvailableIngredients) => {
  return launchOptimalCookieSearch(rawAvailableIngredients, true);
};
