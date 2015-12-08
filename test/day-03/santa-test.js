var expect = require("chai").expect;
var santa = require("../../src/day-03/santa");

describe("--- Day 3: (1/2) houses visits, by himself ---", () => {
  it("delivers present to a single house by default", () => {
    expect(santa.deliverPresentsAlone("").uniqueHousesVisited).to.equal(1);
  });

  it("visits 2 houses when going east >", () => {
    expect(santa.deliverPresentsAlone(">").uniqueHousesVisited).to.equal(2);
  });

  it("visits 4 houses when going ^>v<", () => {
    expect(santa.deliverPresentsAlone("^>v<").uniqueHousesVisited).to.equal(4);
  });

  it("visits 2 houses when going ^v^v^v^v^v", () => {
    expect(santa.deliverPresentsAlone("^v^v^v^v^v").uniqueHousesVisited).to.equal(2);
  });
});

describe("--- Day 3: (2/2) houses visits, with robo-santa! ---", () => {
  it("visits 3 houses when going ^v", () => {
    expect(santa.deliverPresentsWithRobot("^v").uniqueHousesVisited).to.equal(3);
  });

  it("visits 3 houses when going ^>v<", () => {
    expect(santa.deliverPresentsWithRobot("^>v<").uniqueHousesVisited).to.equal(3);
  });

  it("visits 11 houses when going ^v^v^v^v^v", () => {
    expect(santa.deliverPresentsWithRobot("^v^v^v^v^v").uniqueHousesVisited).to.equal(11);
  });
});
