"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let validPasswordGenerator = require("./valid-password-generator");

let currentPassword = "vzbxkghb";
let firstNewPassword = validPasswordGenerator.nextValidPasswordAfter(currentPassword);

exports.solvePartOne = () => {
  return "Santa's next password is " + firstNewPassword;
};

exports.solvePartTwo = () => {
  return "Santa' next next password is " + validPasswordGenerator.nextValidPasswordAfter(firstNewPassword);
};
