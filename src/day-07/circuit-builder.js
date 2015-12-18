"use strict";

exports.fromInstructions = function fromInstructions(instructions) {
  let builtCircuit = {};
  instructions.forEach((i) => builtCircuit[i.to.wireName] = i.from);
  mixinOverride(builtCircuit);
  return builtCircuit;
};

var mixinOverride = (builtCircuit) => {
  builtCircuit.override = function(wireName, newSignal) {
    delete this[wireName];
    this[wireName] = {
      signal: newSignal
    };
  };
};
