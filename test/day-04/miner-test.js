var expect = require("chai").expect;
var miner = require("../../src/day-04/miner");

describe("--- Day 4: (1/2) 1st number that produces five-zeroes hash ---", () => {
  it("returns 609043 when given 'abcdef'", function() {
    this.timeout(50000);
    expect(miner.findFirstNumberThatProducesFive0Hash("abcdef")).to.equal(609043);
  });
});
