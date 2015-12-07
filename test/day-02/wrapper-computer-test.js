var expect = require("chai").expect;
var WrapperComputer = require("../../src/day-02/wrapper-computer");

describe("--- Day 2: I Was Told There Would Be No Math (1/2) ---", () => {
  it("computes 58 square feet of paper for a 2x3x4 present", function() {
    var requiredSurface = new WrapperComputer().loadPresents(aPresent(2, 3, 4)).paperSurfaceRequired;
    expect(requiredSurface).to.equal(58);
  });

  it("computes 43 square feet of paper for a 1x1x10 present", () => {
    var requiredSurface = new WrapperComputer().loadPresents(aPresent(1, 1, 10)).paperSurfaceRequired;
    expect(requiredSurface).to.equal(43);
  });

  it("computes 86 square feet of paper for two 1x1x10 presents", () => {
    var requiredSurface = new WrapperComputer().loadPresents(aPresent(1, 1, 10), aPresent(1, 1, 10)).paperSurfaceRequired;
    expect(requiredSurface).to.equal(86);
  });
});

var aPresent = (l, w, h) => {
  return {
    length: l,
    width: w,
    height: h
  };
};
