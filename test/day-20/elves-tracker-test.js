var expect = require("chai").expect;
var elvesTracker = require("../../src/day-20/elves-tracker");

describe("--- Day 20: (1/2) first house to receive gifts --- ", () => {
  it("finds that house #1 is 1st house to receive at least 10 presents", () => {
    expect(elvesTracker.firstHouseToReceiveAtLeast(10)).to.equal(1);
  });

  it("finds that house #4 is 1st house to receive at least 50 presents", () => {
    expect(elvesTracker.firstHouseToReceiveAtLeast(50)).to.equal(4);
  });

  it("finds that house #36 is 1st house to receive at least 781 presents (with no visits limit)", () => {
    expect(elvesTracker.firstHouseToReceiveAtLeast(781, false)).to.equal(36);
  });

  it("finds that house #30 is 1st house to receive at least 781 presents (with a 50-visits limit)", () => {
    expect(elvesTracker.firstHouseToReceiveAtLeast(781, true)).to.equal(30);
  });
});
