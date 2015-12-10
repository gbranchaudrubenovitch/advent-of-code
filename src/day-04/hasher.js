"use strict";

var crypto = require('crypto');

exports.computeMd5 = function computeMd5(input) {
  return crypto.createHash("md5").update(input).digest();
};
