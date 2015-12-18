var expect = require("chai").expect;
var instructions = require("../../src/day-07/instructions");

describe("Wire connection instructions", () => {
  it("can parse a signal-to-wire instruction", () => {
    var parsedInstruction = instructions.fromString("123 -> x");
    expect(parsedInstruction.from.signal).to.equal(123);
    expect(parsedInstruction.to.wire).to.equal("x");
  });

  it("can parse an AND instruction", () => {
    var parsedInstruction = instructions.fromString("x AND y -> z");
    expect(parsedInstruction.from.gate.in1).to.equal("x");
    expect(parsedInstruction.from.gate.type).to.equal("AND");
    expect(parsedInstruction.from.gate.in2).to.equal("y");
    expect(parsedInstruction.to.wire).to.equal("z");
  });

  it("can parse an OR instruction", () => {
    var parsedInstruction = instructions.fromString("p OR q -> r");
    expect(parsedInstruction.from.gate.in1).to.equal("p");
    expect(parsedInstruction.from.gate.type).to.equal("OR");
    expect(parsedInstruction.from.gate.in2).to.equal("q");
    expect(parsedInstruction.to.wire).to.equal("r");
  });

  it("can parse a LSHIFT instruction", () => {
    var parsedInstruction = instructions.fromString("p LSHIFT 2 -> q");
    expect(parsedInstruction.from.gate.in1).to.equal("p");
    expect(parsedInstruction.from.gate.type).to.equal("LSHIFT");
    expect(parsedInstruction.from.gate.in2).to.equal(2);
    expect(parsedInstruction.to.wire).to.equal("q");
  });

  it("can parse a RSHIFT instruction", () => {
    var parsedInstruction = instructions.fromString("q RSHIFT 3 -> r");
    expect(parsedInstruction.from.gate.in1).to.equal("q");
    expect(parsedInstruction.from.gate.type).to.equal("RSHIFT");
    expect(parsedInstruction.from.gate.in2).to.equal(3);
    expect(parsedInstruction.to.wire).to.equal("r");
  });

  it("can parse a NOT instruction", () => {
    var parsedInstruction = instructions.fromString("NOT e -> f");
    expect(parsedInstruction.from.gate.in1).to.equal("e");
    expect(parsedInstruction.from.gate.type).to.equal("NOT");
    expect(parsedInstruction.to.wire).to.equal("f");
  });
});
