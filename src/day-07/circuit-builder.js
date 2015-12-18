"use strict";

exports.fromInstructions = function fromInstructions(instructions) {
  let builtCircuit = {};
  instructions.forEach((i) => builtCircuit[i.to.wireName] = i.from);
  return builtCircuit;
};
