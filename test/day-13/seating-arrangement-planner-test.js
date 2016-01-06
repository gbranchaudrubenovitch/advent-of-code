var expect = require("chai").expect;
var planner = require("../../src/day-13/seating-arrangement-planner");

describe("--- Day 13: (1/2) optimal seating arrangement --- ", () => {
  it("finds happiness change of a 2-people arrangement", () => {
    var seatingPrefs = ["David would gain 46 happiness units by sitting next to Alice.", "Alice would lose 2 happiness units by sitting next to David."];
    expect(planner.planOptimalArrangement(seatingPrefs).totalHappinessChange).to.equal(44);
  });

  it("finds happiness change of the 4-people sample arrangement", () => {
    var seatingPrefs = ["Alice would gain 54 happiness units by sitting next to Bob.",
      "Alice would lose 79 happiness units by sitting next to Carol.",
      "Alice would lose 2 happiness units by sitting next to David.",
      "Bob would gain 83 happiness units by sitting next to Alice.",
      "Bob would lose 7 happiness units by sitting next to Carol.",
      "Bob would lose 63 happiness units by sitting next to David.",
      "Carol would lose 62 happiness units by sitting next to Alice.",
      "Carol would gain 60 happiness units by sitting next to Bob.",
      "Carol would gain 55 happiness units by sitting next to David.",
      "David would gain 46 happiness units by sitting next to Alice.",
      "David would lose 7 happiness units by sitting next to Bob.",
      "David would gain 41 happiness units by sitting next to Carol."
    ];
    expect(planner.planOptimalArrangement(seatingPrefs).totalHappinessChange).to.equal(330);
  });
});

describe("--- Day 13: (2/2) optimal seating arrangement with you added --- ", () => {
  it("finds happiness change of a 3-people (+ neutral you) arrangement", () => {
    var seatingPrefs = ["David would lose 10 happiness units by sitting next to Alice.",
      "David would gain 20 happiness units by sitting next to Carol.",
      "Alice would lose 2 happiness units by sitting next to David.",
      "Alice would lose 50 happiness units by sitting next to Carol.",
      "Carol would gain 1 happiness units by sitting next to David.",
      "Carol would gain 1 happiness units by sitting next to Alice.",
    ];
    expect(planner.planOptimalArrangementIncludingYou(seatingPrefs).totalHappinessChange).to.equal(9);
  });
});
