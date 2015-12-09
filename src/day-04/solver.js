"use strict";

var miner = require("./miner");

var secretKey = "iwrupvqb";

exports.solvePartOne = () => {
  return "The smallest number that produces a 'five zeroes' hash is " + miner.findFirstNumberThatProducesFive0Hash(secretKey);
};

exports.solvePartTwo = () => {
  return "TODO!!!!!";
};
