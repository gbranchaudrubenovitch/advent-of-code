"use strict";


var uInt16 = (int32) => {
  if (int32 > 65536) {
    throw new Error("OVERFLOW on " + int32 + "!!!!!!!!!!!");
  }
  return int32 < 0 ? 65536 + int32 : int32;
};

var simulateSignalToWire = (instruction) => {
  return instruction.from.signal;
};

var simulateWireToWire = (instruction, currentSimulationResults) => {
  return currentSimulationResults[instruction.from.wire];
};

var simulateGate = (instruction, currentSimulationResults) => {
  let firstIn = Number.isInteger(instruction.from.gate.in1) ? instruction.from.gate.in1 : currentSimulationResults[instruction.from.gate.in1];
  if (instruction.from.gate.type === "AND") {
    let secondIn = Number.isInteger(instruction.from.gate.in2) ? instruction.from.gate.in2 : currentSimulationResults[instruction.from.gate.in2];
    return firstIn & secondIn;
  } else if (instruction.from.gate.type === "OR") {
    let secondIn = Number.isInteger(instruction.from.gate.in2) ? instruction.from.gate.in2 : currentSimulationResults[instruction.from.gate.in2];
    return firstIn | secondIn;
  } else if (instruction.from.gate.type === "LSHIFT") {
    return firstIn << instruction.from.gate.in2;
  } else if (instruction.from.gate.type === "RSHIFT") {
    return firstIn >> instruction.from.gate.in2;
  } else if (instruction.from.gate.type === "NOT") {
    return ~firstIn;
  }
};

exports.fromInstructions = function fromInstructions(instructions) {
  let simulationResults = {};
  for (var i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];

    if (instruction.from.signal) {
      simulationResults[instruction.to.wire] = simulateSignalToWire(instruction);
    } else if (instruction.from.wire) {
      simulationResults[instruction.to.wire] = simulateWireToWire(instruction, simulationResults);
    } else if (instruction.from.gate) {
      simulationResults[instruction.to.wire] = uInt16(simulateGate(instruction, simulationResults));
    } else {
      throw new Error("cannot simulate instruction");
    }
  }
  return simulationResults;
};
