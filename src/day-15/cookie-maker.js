"use strict";

let ingredientsParser = require("./ingredients-parser");
let scoreCounter = require("./score-counter");
let recipes = require("./recipes");

const WEIGHT_TARGET = 100;
const CALORIE_TARGET = 500;

let findOptimalRecipe = (currentRecipe, currentWinner, remainingIngredients, currentWeightOfRecipe, currentCalorieCountOfRecipe, limitTo500Calories) => {
  let recipeIsComplete = remainingIngredients.length === 0;
  if (recipeIsComplete) {
    currentRecipe.score = scoreCounter.scoreOf(currentRecipe);
    return currentRecipe.score > currentWinner.score ? currentRecipe : currentWinner;
  }

  let ingredientToAdd = remainingIngredients[0];
  let bestRecipeYet = currentWinner;
  let maxAdditionalWeight = WEIGHT_TARGET - currentWeightOfRecipe;
  for (let i = 1; i <= maxAdditionalWeight; i++) {
    let newWeight = currentWeightOfRecipe + i;
    let recipeIsAlreadyTooHeavy = newWeight > WEIGHT_TARGET;
    if (recipeIsAlreadyTooHeavy) {
      continue;
    }

    let newCalorieCount = currentCalorieCountOfRecipe + i * ingredientToAdd.calories;
    let recipeIsAlreadyTooRich = limitTo500Calories && newCalorieCount > CALORIE_TARGET;
    if (recipeIsAlreadyTooRich) {
      continue;
    }

    let aboutToAddLastIngredient = remainingIngredients.length === 1;
    if (aboutToAddLastIngredient) {
      let weightWontHitTarget = newWeight !== WEIGHT_TARGET;
      let caloriesWontHitTarget = limitTo500Calories && newCalorieCount !== CALORIE_TARGET;
      if (weightWontHitTarget || caloriesWontHitTarget) {
        continue;
      }
    }

    let recipeToUpdate = recipes.copyOf(currentRecipe);
    recipeToUpdate.ingredients.push(ingredientToAdd);
    recipeToUpdate.quantity.push(i);

    bestRecipeYet = findOptimalRecipe(recipeToUpdate, bestRecipeYet, remainingIngredients.slice(1), newWeight, newCalorieCount, limitTo500Calories);
  }
  return bestRecipeYet;
};

let launchOptimalCookieSearch = (rawAvailableIngredients, limitTo500Calories) => {
  let availableIngredients = ingredientsParser.parse(rawAvailableIngredients);

  let emptyRecipe = recipes.newRecipe([], [], 0);
  return findOptimalRecipe(emptyRecipe, emptyRecipe, availableIngredients, 0, 0, limitTo500Calories);
};

exports.makeOptimalCookieWith = (rawAvailableIngredients) => {
  return launchOptimalCookieSearch(rawAvailableIngredients);
};

exports.makeOptimal500CaloriesCookieWith = (rawAvailableIngredients) => {
  return launchOptimalCookieSearch(rawAvailableIngredients, true);
};
