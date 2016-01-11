var expect = require("chai").expect;
var cookieMaker = require("../../src/day-15/cookie-maker");

describe("--- Day 15: (1/2) highest-score --- ", () => {
  it("finds the highest-scoring cookie with 2 ingredients", () => {
    var availableIngredients = [
      "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
      "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
    ];

    var optimalRecipe = cookieMaker.makeOptimalCookieWith(availableIngredients);

    expect(optimalRecipe.quantity.Butterscotch).to.equal(44);
    expect(optimalRecipe.quantity.Cinnamon).to.equal(56);
    expect(optimalRecipe.score).to.equal(62842880);
  });
});
