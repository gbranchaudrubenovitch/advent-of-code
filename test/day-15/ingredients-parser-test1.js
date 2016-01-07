var expect = require("chai").expect;
var ingredientsParser = require("../../src/day-15/ingredients-parser");

describe("Ingredients parser", () => {
  it("parses 1 ingredient", () => {
    var availableIngredients = [
      "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8"
    ];

    var parsedIngredients = ingredientsParser.parse(availableIngredients);

    expect(parsedIngredients).to.have.length(1);
    expect(parsedIngredients[0].name).to.equal("Butterscotch");
    expect(parsedIngredients[0].capacity).to.equal(-1);
    expect(parsedIngredients[0].durability).to.equal(-2);
    expect(parsedIngredients[0].flavor).to.equal(6);
    expect(parsedIngredients[0].texture).to.equal(3);
    expect(parsedIngredients[0].calories).to.equal(8);
  });

  it("parses 2 ingredients", () => {
    var availableIngredients = [
      "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8",
      "Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
    ];

    var parsedIngredients = ingredientsParser.parse(availableIngredients);

    expect(parsedIngredients).to.have.length(2);
    expect(parsedIngredients[0].name).to.equal("Butterscotch");
    expect(parsedIngredients[1].name).to.equal("Cinnamon");
  });
});
