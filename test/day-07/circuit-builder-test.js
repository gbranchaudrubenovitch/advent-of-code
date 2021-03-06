var expect = require("chai").expect;
var instructions = require("../../src/day-07/instructions");
var circuitBuilder = require("../../src/day-07/circuit-builder");

describe("Circuit Builder", () => {
  it("can build an out-of-order AND instruction", () => {
    var builtCircuit = circuitBuilder.fromInstructions([instruction("x AND y -> d"), instruction("123 -> x"), instruction("456 -> y")]);
    expect(builtCircuit.x.signal).to.equal(123);
    expect(builtCircuit.y.signal).to.equal(456);
    expect(builtCircuit.d.signal === undefined).to.equal(true);
    expect(builtCircuit.d.gate.type).to.equal("AND");
    expect(builtCircuit.d.gate.in1).to.equal("x");
    expect(builtCircuit.d.gate.in2).to.equal("y");
  });

  it("can override a wire to a signal", () => {
    var builtCircuit = circuitBuilder.fromInstructions([instruction("x AND 456 -> d"), instruction("123 -> x")]);
    builtCircuit.override("d", 36);
    expect(builtCircuit.x.signal).to.equal(123);
    expect(builtCircuit.d.signal).to.equal(36);
    expect(builtCircuit.d.gate === undefined).to.equal(true);
  });
});

var instruction = (i) => instructions.fromString(i);
