var expect = require("chai").expect;
var ingredientsParser = require("../../src/day-15/ingredients-parser");
var calorieCounter = require("../../src/day-15/calorie-counter");

describe("Calorie counter", () => {
  it("counts the calories of a 2 ingredients recipe", () => {
    var availableIngredients = ingredientsParser.parse([
      "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
      "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
    ]);

    var recipe = {
      ingredients: availableIngredients,
      quantity: [40, 60]
    };

    expect(calorieCounter.caloriesOf(recipe)).to.equal(500);
  });

  it("counts the calories of a zero ingredient recipe", () => {
    var emptyRecipe = {
      ingredients: [],
      quantity: []
    };
    expect(calorieCounter.caloriesOf(emptyRecipe)).to.equal(0);
  });
});
