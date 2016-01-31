"use strict";

let elvesTracker = require("./elves-tracker");

let targetNumberOfGifts = 33100000;

exports.solvePartOne = () => {
  let houseNumber = elvesTracker.firstHouseToReceiveAtLeast(targetNumberOfGifts, false);
  return `House #${houseNumber} received at least ${targetNumberOfGifts} presents`;
};

exports.solvePartTwo = () => {
  let houseNumber = elvesTracker.firstHouseToReceiveAtLeast(targetNumberOfGifts, true);
  return `With 50 visits max per elf, house #${houseNumber} is now first`;
};
