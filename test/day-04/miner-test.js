var expect = require("chai").expect;
var miner = require("../../src/day-04/miner");

describe("--- Day 4: (1/2) 1st number that produces five-zeroes hash ---", () => {
  it("returns 609043 when given 'abcdef'", function() {
    this.timeout(5000);
    expect(miner.findFirstNumberThatProducesFive0Hash("abcdef")).to.equal(609043);
  });

  it("returns 1048970 when given 'pqrstuv'", function() {
    this.timeout(6000);
    expect(miner.findFirstNumberThatProducesFive0Hash("pqrstuv")).to.equal(1048970);
  });
});

describe("Learning about bit shifts", () => {
  it("shifting to the right 4 bits leave the first 4 bits", function() {
    var originalNumber = parseInt("0x0F", 16);
    expect(originalNumber >> 4).to.equal(0);
  });
});
