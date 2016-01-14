var expect = require("chai").expect;
var cookieMaker = require("../../src/day-15/cookie-maker");

describe("--- Day 15: (1/2) highest-score --- ", () => {
  it("finds the highest-scoring cookie with 2 ingredients", () => {
    var availableIngredients = [
      "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
      "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
    ];

    var optimalRecipe = cookieMaker.makeOptimalCookieWith(availableIngredients);

    expect(optimalRecipe.quantity[0]).to.equal(44);
    expect(optimalRecipe.quantity[1]).to.equal(56);
    expect(optimalRecipe.score).to.equal(62842880);
  });
});

describe("--- Day 15: (2/2) highest-score with 500 calories --- ", () => {
  it("finds the highest-scoring 500 calories cookie with 2 ingredients", () => {
    var availableIngredients = [
      "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
      "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
    ];

    var optimalRecipe = cookieMaker.makeOptimal500CaloriesCookieWith(availableIngredients);

    expect(optimalRecipe.quantity[0]).to.equal(40);
    expect(optimalRecipe.quantity[1]).to.equal(60);
    expect(optimalRecipe.score).to.equal(57600000);
  });
});
