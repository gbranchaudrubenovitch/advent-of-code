var expect = require("chai").expect;
var Santa = require("../src/day-1-santa");

describe("Day 1: Not quite Lisp", function() {
  it("starts on floor 0", function() {
    expect(new Santa().currentFloor()).to.equal(0);
  });

  it("goes up one floor on (", function() {
    var aSanta = new Santa();
    aSanta.followInstructions("(");
    expect(aSanta.currentFloor()).to.equal(1);
  });

  it("goes down one floor on )", function() {
    var aSanta = new Santa();
    aSanta.followInstructions(")");
    expect(aSanta.currentFloor()).to.equal(-1);
  });
});
