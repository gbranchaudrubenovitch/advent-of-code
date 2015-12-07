var expect = require("chai").expect;
var Santa = require("../../src/day-01/santa");

describe("--- Day 1: (1/2) santa's final floor ---", () => {
  it("starts on floor 0", () => {
    expect(new Santa().currentFloor).to.equal(0);
  });

  it("goes up one floor on (", () => {
    var aSanta = new Santa();
    aSanta.followInstructions("(");
    expect(aSanta.currentFloor).to.equal(1);
  });

  it("goes down one floor on )", () => {
    var aSanta = new Santa();
    aSanta.followInstructions(")");
    expect(aSanta.currentFloor).to.equal(-1);
  });

  it("ends up on floor 3 after following (()(()(", () => {
    var aSanta = new Santa();
    aSanta.followInstructions("(()(()(");
    expect(aSanta.currentFloor).to.equal(3);
  });
});

describe("--- Day 1: (2/2) santa entered basement on --", () => {
  it("first enters basement on char 1 for )", () => {
    var aSanta = new Santa();
    aSanta.followInstructions(")");
    expect(aSanta.firstEnteredBasementAtChar).to.equal(1);
  });

  it("first enters basement on char 5 for ()())", () => {
    var aSanta = new Santa();
    aSanta.followInstructions("()())");
    expect(aSanta.firstEnteredBasementAtChar).to.equal(5);
  });
});
