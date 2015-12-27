"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let passwordGenerator = require("./password-generator");

let currentPassword = "vzbxkghb";

exports.solvePartOne = () => {
  return "Santa's next password is " + passwordGenerator.nextValidPasswordAfter(currentPassword);
};

exports.solvePartTwo = () => {
  return "TODO";
};
