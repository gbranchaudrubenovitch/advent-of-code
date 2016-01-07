"use strict";

const specRegex = /(.*) can fly (\d*) km\/s for (\d*) seconds, but then must rest for (\d*) seconds./;

exports.obtainFrom = (reindeerSpecs) => {
  return reindeerSpecs.map((spec) => {
    let matches = specRegex.exec(spec);
    if (matches === null) {
      throw new Error("invalid reindeer spec: " + spec);
    }
    let runningTime = parseInt(matches[3], 10);

    return {
      name: matches[1],
      speed: parseInt(matches[2], 10),
      runningTime: runningTime,
      restTime: parseInt(matches[4], 10),
      state: "RUNNING",
      distanceTraveled: 0,
      remainingTimeBeforeStateChange: runningTime,
      pointsAwarded: 0
    };
  });
};
