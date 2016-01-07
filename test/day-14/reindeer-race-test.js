var expect = require("chai").expect;
var reindeerRace = require("../../src/day-14/reindeer-race");

describe("--- Day 14: (1/2) distance traveled --- ", () => {
  it("counts the distance traveled after 1000s", () => {
    var reindeerSpecs = [
      "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.",
      "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds."
    ];

    expect(reindeerRace.race(reindeerSpecs, 1000).winnerByDistance.distanceTraveled).to.equal(1120);
  });
});

describe("--- Day 14: (2/2) points awarded --- ", () => {
  it("counts the points awarded for being in the lead after 1000s", () => {
    var reindeerSpecs = [
      "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.",
      "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds."
    ];

    expect(reindeerRace.race(reindeerSpecs, 1000).winnerByPoints.pointsAwarded).to.equal(689);
  });
});
