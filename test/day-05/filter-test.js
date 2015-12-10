var expect = require("chai").expect;
var filter = require("../../src/day-05/filter");

describe("--- Day 5: count nice strings ---", () => {
  it("tags aaa as a nice string", () => {
    expect(filter.isNice("aaa")).to.equal(true);
  });

  it("tags jchzalrnumimnmhp as a naughty string", () => {
    expect(filter.isNice("jchzalrnumimnmhp")).to.equal(false);
  });
});
