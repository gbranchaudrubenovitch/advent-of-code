var expect = require("chai").expect;
var santa = require("../../src/day-03/santa");

describe("--- Day 3: (1/2) unique houses ---", () => {
  it("delivers present to a single house by default", () => {
    expect(santa.deliverPresents("").uniqueHousesVisited).to.equal(1);
  });

  it("visits 2 houses when going east >", () => {
    expect(santa.deliverPresents(">").uniqueHousesVisited).to.equal(2);
  });

  it("visits 4 houses when going ^>v<", () => {
    expect(santa.deliverPresents("^>v<").uniqueHousesVisited).to.equal(4);
  });

  it("visits 2 houses when going ^v^v^v^v^v", () => {
    expect(santa.deliverPresents("^v^v^v^v^v").uniqueHousesVisited).to.equal(2);
  });
});
