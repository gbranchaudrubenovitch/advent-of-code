"use strict";

let passwordGenerator = require("./password-generator");
let passwordValidator = require("./password-validator");

exports.nextValidPasswordAfter = (currentPassword) => {
  let candidate = currentPassword;

  while(true) {
    candidate = passwordGenerator.nextPasswordAfter(candidate);
    if (passwordValidator.isValid(candidate)) {
      break;
    }
  }
  return candidate;
};
