"use strict";

const HEALTH_POINTS = 100;

let loadoutsGenerator = require("./loadouts-generator");
let playerGenerator = require("./player-generator");

exports.minimizeSpendToFight = (bossToFight) => {
  let loadouts = loadoutsGenerator.generateFromDefaultStore();
  for (let loadout of loadouts) {
    let player = playerGenerator.with(loadout, HEALTH_POINTS);
  // TODO: simulate the fight and get the cost to beat boss.
  }
  return -1;
};
