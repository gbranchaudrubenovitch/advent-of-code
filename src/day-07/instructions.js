"use strict";

const signalToWireRegex = /^(\d*) -> ([a-z]*)/;
const binaryGateRegex = /^([a-z]*) ([AND|OR]*) ([a-z]*) -> ([a-z]*)/;

var parseSource = (matches) => {
  return {
    signal: parseInt(matches[1], 10)
  };
};

var parseDestination = (matches) => {
  return {
    wire: matches[2]
  };
};

var parseSignalToWireInstruction = (matches) => {
  return {
    from: {
      signal: parseInt(matches[1], 10)
    },
    to: {
      wire: matches[2]
    }
  };
};

var parseBinaryGateInstruction = (matches) => {
  return {
    from: {
      andGate: {
        in1: matches[1],
        in2: matches[3]
      }
    },
    to: {
      wire: matches[4]
    }
  };
};

exports.fromString = function fromString(instruction) {
  let matches = signalToWireRegex.exec(instruction);
  if (matches !== null) {
    return parseSignalToWireInstruction(matches);
  }

  matches = binaryGateRegex.exec(instruction);
  if (matches !== null) {
    return parseBinaryGateInstruction(matches);
  }
  throw new Error("invalid instruction: " + instruction);
};

exports.fromStrings = function fromStrings(instructions) {
  return instructions.map(i => exports.fromString(i));
};
