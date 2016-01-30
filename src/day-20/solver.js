"use strict";

let elvesTracker = require("./elves-tracker");

let targetNumberOfGifts = 33100000;

exports.solvePartOne = () => {
  let houseNumber = elvesTracker.firstHouseToReceiveAtLeast(targetNumberOfGifts);
  return `House #${houseNumber} received at least ${targetNumberOfGifts} presents`;
};

exports.solvePartTwo = () => {
  return `TODO`;
};
