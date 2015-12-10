"use strict";

var hasher = require("./hasher");

var firstHexDigitOf = (byteToInspect) => byteToInspect >> 4;
var secondHexDigitOf = (byteToInspect) => byteToInspect << 4;

var startsWithEnoughLeadingZeroes = (hash, numberOfLeadingZeroes) => {
  for (var i = 0; i < numberOfLeadingZeroes; i++) {
    var byteToInspect = hash[Math.floor(i / 2)];
    var hexDigitToInspect = i % 2 === 0 ? firstHexDigitOf(byteToInspect) : secondHexDigitOf(byteToInspect);
    if (hexDigitToInspect !== 0) {
      return false;
    }
  }
  return true;
};

var findFirstNumber = (secretKey, numberOfLeadingZeroes) => {
  for (var i = 1; i < 4000000000; i++) {
    var candidate = hasher.computeMd5(secretKey + i);
    if (startsWithEnoughLeadingZeroes(candidate, numberOfLeadingZeroes)) {
      return i;
    }
  }
  throw new Error("could not find such an hash.");
};

exports.findFirstNumberThatProducesSix0Hash = function findFirstNumberThatProducesSix0Hash(secretKey) {
  return findFirstNumber(secretKey, 6);
};

exports.findFirstNumberThatProducesFive0Hash = function findFirstNumberThatProducesFive0Hash(secretKey) {
  return findFirstNumber(secretKey, 5);
};
