var expect = require("chai").expect;
var costOptimizer = require("../../src/day-21/cost-optimizer");

describe("--- Day 21: (1/2) minimum spend --- ", () => {
  it.skip("(WIP!) finds that beating X requires Y gold", () => {
    expect(costOptimizer.minimizeSpendToFight(boss(10, 1, 1))).to.equal(100);
  });
});

var boss = (hp, damage, armor) => {
  return {
    HP: hp,
    Damage: damage,
    Armor: armor
  };
};
