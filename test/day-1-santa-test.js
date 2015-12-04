var expect = require("chai").expect;
var santa = require("../src/day-1-santa");

describe("Day 1: Not quite Lisp", function() {
  it("starts on floor 0", function() {
    expect(santa.aSanta().currentFloor()).to.equal(0);
  });

  it("goes up one floor on (", function() {
    var aSanta = santa.aSanta();
    aSanta.followInstructions("(");
    expect(aSanta.currentFloor()).to.equal(1);
  });

  it("goes down one floor on )", function() {
    var aSanta = santa.aSanta();
    aSanta.followInstructions(")");
    expect(aSanta.currentFloor()).to.equal(-1);
  });

  it("ends up on floor 3 after following (()(()(", function() {
    var aSanta = santa.aSanta();
    aSanta.followInstructions("(()(()(");
    expect(aSanta.currentFloor()).to.equal(3);
  });

  it("ignores invalid characters such as \\n", function() {
    var aSanta = santa.aSanta();
    aSanta.followInstructions("\n\r\ts1!");
    expect(aSanta.currentFloor()).to.equal(0);
  });
});
