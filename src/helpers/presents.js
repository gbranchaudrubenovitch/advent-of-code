"use strict";

var aPresent = (l, w, h) => {
  return { length: l, width: w, height: h };
};

exports.fromLines = (stringifiedPresents) => {
  var parsedPresents = [];
  for (let present of stringifiedPresents) {
    var dimensions = present.split("x").map((rawDimension) => Number(rawDimension));
    parsedPresents.push(aPresent(...dimensions));
  }
  return parsedPresents;
};
