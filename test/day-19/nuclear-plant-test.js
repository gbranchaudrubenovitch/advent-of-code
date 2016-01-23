var expect = require("chai").expect;
var nuclearPlant = require("../../src/day-19/nuclear-plant");

describe("--- Day 19: (1/2) calibrate plant --- ", () => {
  it("counts 4 distinct molecules for HOH", () => {
    var replacements = ["H => HO", "H => OH", "O => HH"];

    expect(nuclearPlant.calibrate("HOH", replacements).distinctMoleculesAfterOneReplacement)
      .to.have.length(4)
      .and.to.include("HOOH")
      .and.to.include("HOHO")
      .and.to.include("OHOH")
      .and.to.include("HHHH");
  });
});

describe("--- Day 19: (2/2) finds sequence length to generate molecule --- ", () => {
  it("finds sequence of 3 replacements to generate HOH", () => {
    expect(nuclearPlant.shortestSequenceStartingFromE("HOH")).to.equal(3);
  });

  it("finds sequence of 6 replacements to generate HOHOHO", () => {
    expect(nuclearPlant.shortestSequenceStartingFromE("HOHOHO")).to.equal(6);
  });

});
