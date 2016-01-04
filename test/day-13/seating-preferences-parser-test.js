var expect = require("chai").expect;
var parser = require("../../src/day-13/seating-preferences-parser");

describe("Seating preferences parser", () => {
  it("can parse a single gain instruction", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 46 happiness units by sitting next to Alice."]);
    expect(seatingPrefs.David).not.to.equal(null);

    var davidPrefs = seatingPrefs.David;
    expect(davidPrefs.name).to.equal("David");
    expect(davidPrefs.nextTo).to.have.length(1);
    expect(davidPrefs.nextTo[0].name).to.equal("Alice");
    expect(davidPrefs.nextTo[0].happinessChange).to.equal(46);
  });

  it("can parse two gain instructions for same person", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 64 happiness units by sitting next to Alice.", "David would gain 11 happiness units by sitting next to Bob."]);

    var davidPrefs = seatingPrefs.David;
    expect(davidPrefs.nextTo).to.have.length(2);

    var davidNextToAlice = davidPrefs.nextTo[0];
    expect(davidNextToAlice.name).to.equal("Alice");
    expect(davidNextToAlice.happinessChange).to.equal(64);

    var davidNextToBob = davidPrefs.nextTo[1];
    expect(davidNextToBob.name).to.equal("Bob");
    expect(davidNextToBob.happinessChange).to.equal(11);
  });

  it("can parse both a loss and gain instruction for 2 guests", () => {
    var seatingPrefs = parser.fromStrings(["David would gain 55 happiness units by sitting next to Alice.", "Alice would lose 8 happiness units by sitting next to David."]);
    expect(seatingPrefs.David).not.to.equal(null);
    expect(seatingPrefs.Alice).not.to.equal(null);

    var davidPrefs = seatingPrefs.David;
    expect(davidPrefs.name).to.equal("David");
    expect(davidPrefs.nextTo).to.have.length(1);

    var alicePrefs = seatingPrefs.Alice;
    expect(alicePrefs.name).to.equal("Alice");
    expect(alicePrefs.nextTo).to.have.length(1);
    expect(alicePrefs.nextTo[0].happinessChange).to.equal(-8);
  });
});
