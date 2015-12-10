"use strict";

var miner = require("./miner");

var secretKey = "iwrupvqb";

exports.solvePartOne = () => {
  return "The smallest number that produces a 'five zeroes' hash is " + miner.findFirstNumberThatProducesFive0Hash(secretKey);
};

exports.solvePartTwo = () => {
  return "The smallest number that produces a 'six zeroes' hash is " + miner.findFirstNumberThatProducesSix0Hash(secretKey);
};
