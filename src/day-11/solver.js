"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let validPasswordGenerator = require("./valid-password-generator");

let currentPassword = "vzbxkghb";

exports.solvePartOne = () => {
  return "Santa's next password is " + validPasswordGenerator.nextValidPasswordAfter(currentPassword);
};

exports.solvePartTwo = () => {
  return "TODO";
};
