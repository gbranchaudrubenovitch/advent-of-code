"use strict";

var hasher = require("./hasher");

exports.findFirstNumberThatProducesFive0Hash = function findFirstNumberThatProducesFive0Hash(secretKey) {
  for (var i = 1; i < 10000000; i++) {
    var candidate = hasher.computeMd5(secretKey + i);
    if (candidate.startsWith("00000")) {
      return i;
    }
  }
  throw new Error("could not find such an hash.");
};
