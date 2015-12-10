var expect = require("chai").expect;
var miner = require("../../src/day-04/miner");

describe("--- Day 4: 1st number that produces five-zeroes hash ---", () => {
  it.skip("(too slow!) returns 609043 when given 'abcdef'", function() {
    this.timeout(5000);
    expect(miner.findFirstNumberThatProducesFive0Hash("abcdef")).to.equal(609043);
  });

  it.skip("(too slow!) returns 1048970 when given 'pqrstuv'", function() {
    this.timeout(6000);
    expect(miner.findFirstNumberThatProducesFive0Hash("pqrstuv")).to.equal(1048970);
  });
});

describe("Learning about bit shifts", () => {
  it("shifting 4 bits to the right extracts the first hex digit", function() {
    var originalNumber = parseInt("0x0F", 16);
    expect(originalNumber >> 4).to.equal(0);
  });
});
