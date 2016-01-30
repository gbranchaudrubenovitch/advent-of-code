var expect = require("chai").expect;
var houseFiller = require("../../src/day-20/house-filler");

describe("House filler", () => {
  it("fills house #1 with 10 presents", () => {
    expect(houseFiller.fill(1)).to.equal(10);
  });

  it("fills house #2 with 30 presents", () => {
    expect(houseFiller.fill(2)).to.equal(30);
  });

  it("fills house #3 with 40 presents", () => {
    expect(houseFiller.fill(3)).to.equal(40);
  });

  it("fills house #4 with 70 presents", () => {
    expect(houseFiller.fill(4)).to.equal(70);
  });

  it("fills house #5 with 60 presents", () => {
    expect(houseFiller.fill(5)).to.equal(60);
  });

  it("fills house #6 with 120 presents", () => {
    expect(houseFiller.fill(6)).to.equal(120);
  });

  it("fills house #7 with 80 presents", () => {
    expect(houseFiller.fill(7)).to.equal(80);
  });

  it("fills house #8 with 150 presents", () => {
    expect(houseFiller.fill(8)).to.equal(150);
  });

  it("fills house #9 with 130 presents", () => {
    expect(houseFiller.fill(9)).to.equal(130);
  });
});
