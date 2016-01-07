"use strict";

const ingredientsRegex = /(.*): capacity (-?\d*), durability (-?\d*), flavor (-?\d*), texture (-?\d*), calories (-?\d*)/;

exports.parse = (rawAvailableIngredients) => {
  return rawAvailableIngredients.map(ingredient => {
    let matches = ingredientsRegex.exec(ingredient);
    if (matches === null) {
      throw new Error("Malformed ingredient");
    }

    return {
      name: matches[1],
      capacity: parseInt(matches[2], 10),
      durability: parseInt(matches[3], 10),
      flavor: parseInt(matches[4], 10),
      texture: parseInt(matches[5], 10),
      calories: parseInt(matches[6], 10)
    };
  });
};
