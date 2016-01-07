var expect = require("chai").expect;
var reindeerStable = require("../../src/day-14/reindeer-stable");

describe("Reindeer Stable", () => {
  it("can generate one RUNNING reindeer from a spec", () => {
    var reindeers = reindeerStable.obtainFrom(spec("Comet can fly 22 km/s for 10 seconds, but then must rest for 11 seconds."));

    expect(reindeers).to.have.length(1);
    expect(reindeers[0].name).to.equal("Comet");
    expect(reindeers[0].speed).to.equal(22);
    expect(reindeers[0].runningTime).to.equal(10);
    expect(reindeers[0].restTime).to.equal(11);
    expect(reindeers[0].state).to.equal("RUNNING");
    expect(reindeers[0].distanceTraveled).to.equal(0);
    expect(reindeers[0].remainingTimeBeforeStateChange).to.equal(10);
    expect(reindeers[0].pointsAwarded).to.equal(0);
  });

  it("can generate two RUNNING reindeers from a spec", () => {
    var reindeers = reindeerStable.obtainFrom(spec(
      "Comet can fly 22 km/s for 10 seconds, but then must rest for 11 seconds.",
      "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds."));

    expect(reindeers).to.have.length(2);
    expect(reindeers[1].name).to.equal("Dancer");
    expect(reindeers[1].speed).to.equal(16);
  });
});

var spec = (...reindeerSpecs) => reindeerSpecs;
