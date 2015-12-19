"use strict";
var fs = require("fs");

var readAllLines = (path) => {
  return fs.readFileSync(path, "utf8").replace(/\r?\n|\r/g,"\n").split("\n");
};

var dropEmptyLines = (lines) => {
  return lines.filter((l) => l.length !== 0);
};

exports.readAllLines = (resName, includeEmptyLines) => {
  var allLines = readAllLines("resources/" + resName);
  return includeEmptyLines ? allLines : dropEmptyLines(allLines);
};
