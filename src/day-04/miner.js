"use strict";

var hasher = require("./hasher");

exports.findFirstNumberThatProducesFive0Hash = function findFirstNumberThatProducesFive0Hash(secretKey) {
  for (var i = 1; i < 4000000000; i++) {
    var candidate = hasher.computeMd5(secretKey + i);
    if (candidate[0] === 0 && candidate[1] === 0 && (candidate[2] >> 4) === 0) {
      return i;
    }
  }
  throw new Error("could not find such an hash.");
};
