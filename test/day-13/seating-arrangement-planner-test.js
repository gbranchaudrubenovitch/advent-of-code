var expect = require("chai").expect;
var planner = require("../../src/day-13/seating-arrangement-planner");

describe("--- Day 13: (1/2) optimal seating arrangement --- ", () => {
  it("finds happiness change of the only possible 2-people arrangement", () => {
    var seatingPrefs = ["David would gain 46 happiness units by sitting next to Alice.", "Alice would lose 2 happiness units by sitting next to David."];
    expect(planner.planOptimalArrangement(seatingPrefs).totalHappinessChange).to.equal(44);
  });
});
