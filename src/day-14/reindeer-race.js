"use strict";

let reindeerStable = require("./reindeer-stable");

let ReindeerRace = class ReindeerRace {
  constructor(reindeers) {
    this.reindeers = reindeers;
  }

  raceFor(durationInSeconds) {
    for (let currentSecondCount = 0; currentSecondCount <= durationInSeconds; currentSecondCount++) {
      this.moveReindeers();
      this.awardPointToLeadingReindeers();
    }

    return {
      winnerByDistance: this.pickWinningReindeerByDistance(),
      winnerByPoints: this.pickWinningReindeerByPoints()
    };
  }

  moveReindeers() {
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

  awardPointToLeadingReindeers() {
    let allLeadingReindeers = this.findLeadingReindeers();
    allLeadingReindeers.forEach(r => r.pointsAwarded++);
  }

  pickWinningReindeerByDistance() {
    let allLeadingReindeers = this.findLeadingReindeers();
    if (allLeadingReindeers.length !== 1) {
      throw new Error("There can only be one!!!!!!!!!!");
    }
    return allLeadingReindeers[0];
  }

  findLeadingReindeers() {
    let ties = [];
    let currentLeader = null;
    for (let candidate of this.reindeers) {
      if (!currentLeader || candidate.distanceTraveled > currentLeader.distanceTraveled) {
        ties = [];
        currentLeader = candidate;
      } else if (candidate.distanceTraveled === currentLeader.distanceTraveled) {
        ties.push(candidate);
      }
    }
    return ties.concat(currentLeader);
  }

  pickWinningReindeerByPoints() {
    let currentLeader = null;
    for (let candidate of this.reindeers) {
      if (!currentLeader || candidate.pointsAwarded > currentLeader.pointsAwarded) {
        currentLeader = candidate;
      }
    }
    return currentLeader;
  }
};

exports.race = (reindeerSpecs, durationInSeconds) => {
  let reindeers = reindeerStable.obtainFrom(reindeerSpecs);
  return new ReindeerRace(reindeers).raceFor(durationInSeconds);
};
