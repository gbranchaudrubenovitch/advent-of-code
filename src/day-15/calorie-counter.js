"use strict";

exports.caloriesOf = (cookieRecipe) => {
  let caloriesCount = 0;
  for (let i = 0; i < cookieRecipe.ingredients.length; i++) {
    let quantity = cookieRecipe.quantity[i];
    let ingredient = cookieRecipe.ingredients[i];

    caloriesCount += quantity * ingredient.calories;
  }
  return caloriesCount;
};
