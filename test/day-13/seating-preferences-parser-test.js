var expect = require("chai").expect;
var parser = require("../../src/day-13/seating-preferences-parser");

describe("Seating preferences parser", () => {
  it("can parse a single gain instruction", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 46 happiness units by sitting next to Alice."]);
    expect(seatingPrefs).to.have.length(1);

    var davidPrefs = seatingPrefs[0];
    expect(davidPrefs.guest).to.equal("David");
    expect(davidPrefs.nextTo).to.equal("Alice");
    expect(davidPrefs.happinessChange).to.equal(46);
  });

  it("can parse both a loss and gain instruction", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 55 happiness units by sitting next to Alice.", "Alice would lose 8 happiness units by sitting next to David."]);
    expect(seatingPrefs).to.have.length(2);

    var davidPrefs = seatingPrefs[0];
    expect(davidPrefs.guest).to.equal("David");

    var alicePrefs = seatingPrefs[1];
    expect(alicePrefs.guest).to.equal("Alice");
    expect(alicePrefs.nextTo).to.equal("David");
    expect(alicePrefs.happinessChange).to.equal(-8);
  });
});
