var expect = require("chai").expect;
var filter = require("../../src/day-05/filter");

describe("--- Day 5: (1/2) count nice strings ---", () => {
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

describe("--- Day 5: (2/2) count nice strings (for real) ---", () => {
  it("tags xyxy as a nice string (for real)", () => {
    expect(filter.isNiceForReal("xyxy")).to.equal(true);
  });

  it("tags aabcdefegaa as a nice string (for real)", () => {
    expect(filter.isNiceForReal("aabcdefegaa")).to.equal(true);
  });

  it("tags aaa as a naughty string (for real)", () => {
    expect(filter.isNiceForReal("aaa")).to.equal(false);
  });

  it("tags qjhvhtzxzqqjkmpb as a nice string (for real)", () => {
    expect(filter.isNiceForReal("qjhvhtzxzqqjkmpb")).to.equal(true);
  });

  it("tags uurcxstgmygtbstg as a naughty string (for real)", () => {
    expect(filter.isNiceForReal("uurcxstgmygtbstg")).to.equal(false);
  });

  it("tags ieodomkazucvgmuy as a naughty string (for real)", () => {
    expect(filter.isNiceForReal("ieodomkazucvgmuy")).to.equal(false);
  });
});
