"use strict";

let scoreCounter = require("./score-counter");

exports.newRecipe = (ingredientsToUse, quantitiesOfEach, score) => {
  return {
    ingredients: ingredientsToUse,
    quantity: quantitiesOfEach,
    score: score
  };
};

exports.buildCompleteRecipe = (ingredientsToUse, quantitiesOfEach) => {
  let recipe = exports.newRecipe(ingredientsToUse, quantitiesOfEach, 0);
  recipe.score = scoreCounter.scoreOf(recipe);

  return recipe;
};

exports.copyOf = (recipe) => {
  return exports.newRecipe(recipe.ingredients.slice(), recipe.quantity.slice(), recipe.score);
};
