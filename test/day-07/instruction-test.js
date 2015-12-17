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
    expect(parsedInstruction.from.andGate.in1).to.equal("x");
    expect(parsedInstruction.from.andGate.in2).to.equal("y");
    expect(parsedInstruction.to.wire).to.equal("z");
  });
});
