"use strict";

let replacementsParser = require("./replacements");

exports.calibrate = (calibrationTarget, rawReplacements) => {
  let replacements = replacementsParser.from(rawReplacements);
  return {
    distinctMoleculesAfterOneReplacement: 0
  };
};
