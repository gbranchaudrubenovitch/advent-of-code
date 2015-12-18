"use strict";
var circuitBuilder = require("./circuit-builder");

var uInt16 = (int32) => {
  if (int32 > 65536) {
    throw new Error("OVERFLOW on " + int32 + "!!!!!!!!!!!");
  }
  return int32 < 0 ? 65536 + int32 : int32;
};

var gateExecutor = {
  "AND": (firstIn, secondIn) => uInt16(firstIn & secondIn),
  "OR": (firstIn, secondIn) => uInt16(firstIn | secondIn),
  "LSHIFT": (firstIn, secondIn) => uInt16(firstIn << secondIn),
  "RSHIFT": (firstIn, secondIn) => uInt16(firstIn >> secondIn),
  "NOT": (firstIn) => uInt16(~firstIn)
};

var reader = (builtCircuit) => {
  let followWireUntilSignal = function(wireName) {
    let wireToRead = builtCircuit[wireName];
    let resolvedSignal = null;

    if (wireToRead.signal !== undefined) {
      return wireToRead.signal;
    } else if (wireToRead.wireName !== undefined) {
      let nextWire = builtCircuit[wireToRead.wireName];
      resolvedSignal = followWireUntilSignal(wireToRead.wireName, nextWire);
    } else if (wireToRead.gate !== undefined) {
      let firstInput = Number.isInteger(wireToRead.gate.in1) ? wireToRead.gate.in1 : followWireUntilSignal(wireToRead.gate.in1, builtCircuit[wireToRead.gate.in1]);
      if (wireToRead.gate.in2 === undefined) {
        resolvedSignal = gateExecutor[wireToRead.gate.type](firstInput);
      } else {
        let secondInput = Number.isInteger(wireToRead.gate.in2) ? wireToRead.gate.in2 : followWireUntilSignal(wireToRead.gate.in2, builtCircuit[wireToRead.gate.in2]);
        resolvedSignal = gateExecutor[wireToRead.gate.type](firstInput, secondInput);
      }
    }
    builtCircuit[wireName].signal = resolvedSignal;
    return resolvedSignal;
  };

  return {
    read: (wireName) => {
      return followWireUntilSignal(wireName);
    }
  };
};

exports.from = function from(instructions) {
  let builtCircuit = circuitBuilder.fromInstructions(instructions);
  return reader(builtCircuit);
};
