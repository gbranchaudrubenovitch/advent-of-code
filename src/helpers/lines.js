"use strict";
var fs = require("fs");

var fromFile = (path) => {
  return fs.readFileSync(path, "utf8").split("\n");
};

var dropEmptyLines = (lines) => {
  return lines.filter((l) => l.length !== 0);
};

exports.fromResource = (resName, includeEmptyLines) => {
  var allLines = fromFile("resources/" + resName);
  return includeEmptyLines ? allLines : dropEmptyLines(allLines);
};
