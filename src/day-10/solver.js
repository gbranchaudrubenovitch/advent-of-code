"use strict";

let lookAndSayGenerator = require("./look-and-say-generator");

exports.solvePartOne = () => {
  return "The length of the 40th iteration is " + lookAndSayGenerator.iteration40Of(1113222113).toString().length;
};

exports.solvePartTwo = () => {
  return "TODO";
};
