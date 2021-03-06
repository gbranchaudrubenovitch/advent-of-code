var expect = require("chai").expect;
var ingredientsParser = require("../../src/day-15/ingredients-parser");
var recipes = require("../../src/day-15/recipes");
var scoreCounter = require("../../src/day-15/score-counter");

describe("Score counter", () => {
  it("counts the score of a 2 ingredients recipe", () => {
    var availableIngredients = ingredientsParser.parse([
      "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
      "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
    ]);

    var recipe = recipes.newRecipe(availableIngredients, [44, 56]);
    expect(scoreCounter.scoreOf(recipe)).to.equal(62842880);
  });

  it("counts the score of a zero ingredient recipe", () => {
    var emptyRecipe = recipes.newRecipe([], []);
    expect(scoreCounter.scoreOf(emptyRecipe)).to.equal(0);
  });
});
