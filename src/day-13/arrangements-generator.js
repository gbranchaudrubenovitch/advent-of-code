"use strict";

let Combinatorics = require('js-combinatorics');

exports.generateAllFrom = (guestNames) => {
  return Combinatorics.permutation(guestNames).toArray();
};
