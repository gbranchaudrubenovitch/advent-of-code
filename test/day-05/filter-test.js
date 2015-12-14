var expect = require("chai").expect;
var filter = require("../../src/day-05/filter");

describe("--- Day 5: count nice strings ---", () => {
  it("tags ugknbfddgicrmopn as a nice string", () => {
    expect(filter.isNice("ugknbfddgicrmopn")).to.equal(true);
  });

  it("tags aaa as a nice string", () => {
    expect(filter.isNice("aaa")).to.equal(true);
  });

  it("tags jchzalrnumimnmhp as a naughty string", () => {
    expect(filter.isNice("jchzalrnumimnmhp")).to.equal(false);
  });

  it("tags haegwjzuvuyypxyu as a naughty string", () => {
    expect(filter.isNice("haegwjzuvuyypxyu")).to.equal(false);
  });

  it("tags dvszwmarrgswjxmb as a naughty string", () => {
    expect(filter.isNice("dvszwmarrgswjxmb")).to.equal(false);
  });
});
