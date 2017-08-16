"use strict";

let costOptimizer = require("./cost-optimizer");

let boss = {
  HP: 104,
  Damage: 8,
  Armor: 1
};

exports.solvePartOne = () => {
  let minimumSpend = costOptimizer.minimizeSpendToFight(boss);
  return `TODO - The boss can be beaten with ${minimumSpend} gold`;
};

exports.solvePartTwo = () => {
  return `TODO`;
};
