"use strict";

const signalToWireRegex = /^(\d*) -> ([a-z]*)/;
const wireToWireRegex = /^([a-z]*) -> ([a-z]*)/;
const binaryGateRegex = /^([a-z|\d]*) (AND|OR|LSHIFT|RSHIFT) ([a-z|\d]*) -> ([a-z]*)/;
const unaryGateRegex = /^(NOT) ([a-z]*) -> ([a-z]*)/;

var intOrChar = (candidate) => {
  var parsedCandidate = parseInt(candidate, 10);
  return Number.isNaN(parsedCandidate) ? candidate : parsedCandidate;
};

var toWire = (wireName) => {
  return {
    wireName: wireName
  };
};

var parseSignalToWireInstruction = (matches) => {
  let instruction = {};
  instruction.to = toWire(matches[2]);
  instruction.from = {
    signal: parseInt(matches[1], 10)
  };
  return instruction;
};

var parseWireToWireInstruction = (matches) => {
  let instruction = {};
  instruction.to = toWire(matches[2]);
  instruction.from = {
    wireName: matches[1]
  };
  return instruction;
};

var parseUnaryGateInstruction = (matches) => {
  let instruction = {};
  instruction.to = toWire(matches[3]);
  instruction.from = {
    gate: {
      type: matches[1],
      in1: matches[2],
    }
  };
  return instruction;
};

var parseBinaryGateInstruction = (matches) => {
  let instruction = {};
  instruction.to = toWire(matches[4]);
  instruction.from = {
    gate: {
      type: matches[2],
      in1: intOrChar(matches[1]),
      in2: intOrChar(matches[3])
    }
  };
  return instruction;
};

exports.fromString = function fromString(instruction) {
  let matches = signalToWireRegex.exec(instruction);
  if (matches !== null) {
    return parseSignalToWireInstruction(matches);
  }

  matches = wireToWireRegex.exec(instruction);
  if (matches !== null) {
    return parseWireToWireInstruction(matches);
  }

  matches = binaryGateRegex.exec(instruction);
  if (matches !== null) {
    return parseBinaryGateInstruction(matches);
  }

  matches = unaryGateRegex.exec(instruction);
  if (matches !== null) {
    return parseUnaryGateInstruction(matches);
  }
  throw new Error("invalid instruction: " + instruction);
};

exports.fromStrings = function fromStrings(instructions) {
  return instructions.map(i => exports.fromString(i));
};
