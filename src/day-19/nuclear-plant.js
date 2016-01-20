"use strict";

let replacements = require("./replacements");

exports.calibrate = (rawReplacements) => {
  let replacements = replacements.from(rawReplacements);
  return {
    distinctMoleculesAfterOneReplacement: 0
  };
};
