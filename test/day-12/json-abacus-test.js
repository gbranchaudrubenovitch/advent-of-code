var expect = require("chai").expect;
var jsonAbacus = require("../../src/day-12/json-abacus");

describe("--- Day 12: sum of all numbers --- ", () => {
  it("returns 6 as sum of [1,2,3]", () => {
    expect(jsonAbacus.sumAllNumbers("[1,2,3]")).to.equal(6);
  });

  it("returns 6 as sum of {'a':2,'b':4}", () => {
    expect(jsonAbacus.sumAllNumbers('{"a":2,"b":4}')).to.equal(6);
  });
  
  it("returns 6 as sum of {'a':{'b':4},'c':-1}", () => {
    expect(jsonAbacus.sumAllNumbers('{"a":{"b":4},"c":-1}')).to.equal(3);
  });
  
  it("returns 0 as sum of []", () => {
    expect(jsonAbacus.sumAllNumbers('[]')).to.equal(0);
  });
  
});
