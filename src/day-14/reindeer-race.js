"use strict";

let reindeerStable = require("./reindeer-stable");

let ReindeerRace = class ReindeerRace {
constructor(reindeers) {
  this.reindeers = reindeers;
}

raceFor(durationInSeconds) {
  for (let currentSecondCount = 0; currentSecondCount <= durationInSeconds; currentSecondCount++) {
    this.updateReindeers(currentSecondCount);
  }

  return {
    winningReindeer: this.pickWinningReindeer()
  };
}

updateReindeers() {
  for (let reindeer of this.reindeers) {
    if (reindeer.state === "RESTING") {
      reindeer.remainingTimeBeforeStateChange -= 1;
    }

    if (reindeer.state === "RUNNING") {
      reindeer.distanceTraveled += reindeer.speed;
      reindeer.remainingTimeBeforeStateChange -= 1;
    }

    if (reindeer.remainingTimeBeforeStateChange === 0) {
      reindeer.state = reindeer.state === "RUNNING" ? "RESTING" : "RUNNING";
      reindeer.remainingTimeBeforeStateChange = reindeer.state === "RUNNING" ? reindeer.runningTime : reindeer.restTime;
    }
  }
}

pickWinningReindeer() {
  let currentWinner = null;
  for (let candidate of this.reindeers) {
    if (!currentWinner || candidate.distanceTraveled > currentWinner.distanceTraveled) {
      currentWinner = candidate;
    }
  }
  return currentWinner;
}
};

exports.race = (reindeerSpecs, durationInSeconds) => {
  let reindeers = reindeerStable.obtainFrom(reindeerSpecs);
  return new ReindeerRace(reindeers).raceFor(durationInSeconds);
};
