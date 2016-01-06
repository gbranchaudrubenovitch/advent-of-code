var expect = require("chai").expect;
var parser = require("../../src/day-13/seating-preferences-parser");

describe("Seating preferences parser", () => {
  it("can parse a single gain instruction", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 46 happiness units by sitting next to Alice."]);
    expect(seatingPrefs.David).not.to.equal(null);

    var davidPrefs = seatingPrefs.David;
    expect(davidPrefs.name).to.equal("David");
    expect(davidPrefs.nextTo.Alice.happinessChange).to.equal(46);
  });

  it("can parse two gain instructions for same person", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 64 happiness units by sitting next to Alice.", "David would gain 11 happiness units by sitting next to Bob."]);

    var davidPrefs = seatingPrefs.David;
    expect(davidPrefs.nextTo.Alice.happinessChange).to.equal(64);
    expect(davidPrefs.nextTo.Bob.happinessChange).to.equal(11);
  });

  it("can parse both a loss and gain instruction for 2 guests", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 55 happiness units by sitting next to Alice.", "Alice would lose 8 happiness units by sitting next to David."]);
    expect(seatingPrefs.David).not.to.equal(null);
    expect(seatingPrefs.Alice).not.to.equal(null);

    var davidPrefs = seatingPrefs.David;
    expect(davidPrefs.name).to.equal("David");
    expect(davidPrefs.nextTo.Alice.happinessChange).to.equal(55);

    var alicePrefs = seatingPrefs.Alice;
    expect(alicePrefs.name).to.equal("Alice");
    expect(alicePrefs.nextTo.David.happinessChange).to.equal(-8);
  });
});
