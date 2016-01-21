"use strict";

const replacementRegex = /(.*) => (.*)/;

let parseReplacement = (rawReplacement) => {
  let matches = replacementRegex.exec(rawReplacement);
  if (!matches) {
    throw new Error ("Invalid replacement. | " + rawReplacement);
  }
  return {
    match: matches[1],
    replacement: matches[2]
  };
};

exports.from = (rawReplacements) => {
  return rawReplacements.map(r => parseReplacement(r));
};
