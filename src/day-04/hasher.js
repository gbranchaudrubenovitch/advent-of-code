"use strict";

var crypto = require('crypto');

exports.computeMd5 = function computeMd5(input) {
  var hash = crypto.createHash("md5");
  hash.setEncoding("hex");
  hash.end(input);
  return hash.read();
};
