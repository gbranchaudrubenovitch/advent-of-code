var expect = require("chai").expect;
var Santa = require("../src/day-1");

describe("--- Day 1: Not quite Lisp (1/2) ---", function() {
  it("starts on floor 0", function() {
    expect(new Santa().currentFloor).to.equal(0);
  });

  it("goes up one floor on (", function() {
    var aSanta = new Santa();
    aSanta.followInstructions("(");
    expect(aSanta.currentFloor).to.equal(1);
  });

  it("goes down one floor on )", function() {
    var aSanta = new Santa();
    aSanta.followInstructions(")");
    expect(aSanta.currentFloor).to.equal(-1);
  });

  it("ends up on floor 3 after following (()(()(", function() {
    var aSanta = new Santa();
    aSanta.followInstructions("(()(()(");
    expect(aSanta.currentFloor).to.equal(3);
  });
});

describe("--- Day 1: Not quite Lisp (2/2) --", function() {
  it("first enters basement on char 1 for )", function() {
    var aSanta = new Santa();
    aSanta.followInstructions(")");
    expect(aSanta.firstEnteredBasementAtChar).to.equal(1);
  });

  it("first enters basement on char 5 for ()())", function() {
    var aSanta = new Santa();
    aSanta.followInstructions("()())");
    expect(aSanta.firstEnteredBasementAtChar).to.equal(5);
  });
});
