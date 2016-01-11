"use strict";

let ingredientsParser = require("./ingredients-parser");

let clipToZero = (number) => Math.max(0, number);

exports.scoreOf = (cookieRecipe) => {
  let capacitySum = 0,
    durabilitySum = 0,
    flavorSum = 0,
    textureSum = 0;

  for (let i = 0; i < cookieRecipe.ingredients.length; i++) {
    let quantity = cookieRecipe.quantity[i];
    let ingredient = cookieRecipe.ingredients[i];

    capacitySum += quantity * ingredient.capacity;
    durabilitySum += quantity * ingredient.durability;
    flavorSum += quantity * ingredient.flavor;
    textureSum += quantity * ingredient.texture;
  }

  capacitySum = clipToZero(capacitySum);
  durabilitySum = clipToZero(durabilitySum);
  flavorSum = clipToZero(flavorSum);
  textureSum = clipToZero(textureSum);

  return capacitySum * durabilitySum * flavorSum * textureSum;
};
