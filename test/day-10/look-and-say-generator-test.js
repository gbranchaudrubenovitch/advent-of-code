var expect = require("chai").expect;
var LookAndSayGenerator = require("../../src/day-10/look-and-say-generator");

describe("--- Day 10: (1/2) computes the 40th iteration --- ", () => {
  it("can compute 1st iteration of 1", () => {
    expect(new LookAndSayGenerator("1").iteration(1)).to.equal("11");
  });
  
  it("can compute 2nd iteration of 1", () => {
    expect(new LookAndSayGenerator("1").iteration(2)).to.equal("21");
  });
  
  it("can compute 3rd iteration of 1", () => {
    expect(new LookAndSayGenerator("1").iteration(3)).to.equal("1211");
  });

  it("can compute 4th iteration of 1", () => {
    expect(new LookAndSayGenerator("1").iteration(4)).to.equal("111221");
  });

  it("can compute 5th iteration of 1", () => {
    expect(new LookAndSayGenerator("1").iteration(5)).to.equal("312211");
  });
});
