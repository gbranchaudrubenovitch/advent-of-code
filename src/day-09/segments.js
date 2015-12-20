"use strict";

const segmentRegex = /(.*) to (.*) = (\d*)/;

exports.fromStrings = (rawSegments) => {
  return rawSegments.map((s) => fromString(s));
};

var fromString = function (rawSegment) {
  let matches = segmentRegex.exec(rawSegment);
  if (matches === null) {
    throw new Error("Segment is badly formed. | " + rawSegment);
  }

  return {
    from: matches[1],
    to: matches[2],
    distance: parseInt(matches[3], 10),
  };
};
