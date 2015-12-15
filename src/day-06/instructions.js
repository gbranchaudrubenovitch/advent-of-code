"use strict";

const instructionRegex = /(.*) (\d*),(\d*) [a-z]* (\d*),(\d*)/;

var parseAction = (matches) => {
  return matches[1];
};

var parseCoordinates = (matches) => {
  return {
    topLeft: {
      x: parseInt(matches[2], 10),
      y: parseInt(matches[3], 10)
    },
    bottomRight: {
      x: parseInt(matches[4], 10),
      y: parseInt(matches[5], 10)
    }
  };
};

exports.fromString = function fromString(instruction) {
  let matches = instructionRegex.exec(instruction);
  if (matches === null) {
    throw new Error("invalid instruction: " + instruction);
  }

  let parsedInstruction = {};
  parsedInstruction.action = parseAction(matches);
  parsedInstruction.coords = parseCoordinates(matches);
  return parsedInstruction;
};

exports.fromStrings = function fromStrings(instructions) {
  return instructions.map(i => exports.fromString(i));
};
