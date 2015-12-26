"use strict";

let LookAndSayGenerator = require("./look-and-say-generator");

exports.solvePartOne = () => {
  return "The length of the 40th iteration is " + new LookAndSayGenerator("1113222113").iteration(40).length;
};

exports.solvePartTwo = () => {
  return "TODO";
};
