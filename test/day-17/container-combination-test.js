var expect = require("chai").expect;
var containerCombinations = require("../../src/day-17/container-combinations");

describe("--- Day 17: (1/2) finding the container combinations --- ", () => {
  it("finds the 4 ways to fit 150 liters in 5 containers", () => {
    var containers = ["20", "15", "10", "5", "5"];

    expect(containerCombinations.fittingExactly(25, containers)).to.equal(4);
  });
});
