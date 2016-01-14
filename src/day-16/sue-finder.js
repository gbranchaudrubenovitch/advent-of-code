"use strict";

let sueParser = require("./sue-parser");

exports.findTheRightSue = (rawSues, compoundsTheRightSueMustMatch) => {
  let allSues = sueParser.from(rawSues);
  return allSues[0].number;
};
