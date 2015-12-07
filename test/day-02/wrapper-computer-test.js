var expect = require("chai").expect;
var WrapperComputer = require("../../src/day-02/wrapper-computer");

describe("--- Day 2: (1/2) paper surface ---", () => {
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

describe("--- Day 2: (2/2) ribbon length ---", () => {
  it("computes 34 feet of ribbon for a 2x3x4 present", function() {
    var requiredLength = new WrapperComputer().loadPresents(aPresent(2, 3, 4)).ribbonLengthRequired;
    expect(requiredLength).to.equal(34);
  });

  it("computes 14 feet of ribbon for a 1x1x10 present", function() {
    var requiredLength = new WrapperComputer().loadPresents(aPresent(1, 1, 10)).ribbonLengthRequired;
    expect(requiredLength).to.equal(14);
  });
});

var aPresent = (l, w, h) => {
  return {
    length: l,
    width: w,
    height: h
  };
};
