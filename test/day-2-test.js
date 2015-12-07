var expect = require("chai").expect;
var wrapperComputer = require("../src/day-2");

describe("--- Day 2: I Was Told There Would Be No Math (1/2) ---", () => {
  it("computes 58 square feet of paper for a 2x3x4 present", function () {
    var requiredSurface = wrapperComputer.surfaceRequiredFor(aPresent(2, 3, 4));
    expect(requiredSurface).to.equal(58);
  });

  it("computes 43 square feet of paper for a 1x1x10 present", () => {
    var requiredSurface = wrapperComputer.surfaceRequiredFor(aPresent(1, 1, 10));
    expect(requiredSurface).to.equal(43);
  });

  it("computes 86 square feet of paper for two 1x1x10 presents", () => {
    var requiredSurface = wrapperComputer.surfaceRequiredFor(aPresent(1, 1, 10), aPresent(1, 1, 10));
    expect(requiredSurface).to.equal(86);
  });
});

var aPresent = (l, w, h) => { return {length: l, width: w, height: h}; };
