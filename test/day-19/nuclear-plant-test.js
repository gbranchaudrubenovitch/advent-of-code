var expect = require("chai").expect;
var nuclearPlant = require("../../src/day-19/nuclear-plant");

describe("--- Day 19: (1/2) calibrate plant --- ", () => {
  it("counts 4 distinct molecules for HOH", () => {
    var replacements = ["H => HO", "H => OH", "O => HH"];

    expect(nuclearPlant.calibrate("HOH", replacements).distinctMoleculesAfterOneReplacement).to.equal(4);
  });
});
