var expect = require("chai").expect;
var instructions = require("../../src/day-07/instructions");
var circuitSimulator = require("../../src/day-07/circuit-simulator");

describe("--- Day 7: (1/2) build circuit ---", () => {
  it("simulates signal-to-wire instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions(singleInstruction("123 -> x"));
    expect(simulationResults.x).to.equal(123);
  });

  it("simulates wire-to-wire instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("123 -> x"), instruction("x -> y")]);
    expect(simulationResults.y).to.equal(123);
  });

  it("simulates 2-wire AND instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("123 -> x"), instruction("456 -> y"), instruction("x AND y -> d")]);
    expect(simulationResults.d).to.equal(72);
  });

  it("simulates 1-signal-1-wire AND instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("456 -> y"), instruction("123 AND y -> d")]);
    expect(simulationResults.d).to.equal(72);
  });

  it("simulates 1-wire-1-signal AND instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("123 -> x"), instruction("x AND 456 -> d")]);
    expect(simulationResults.d).to.equal(72);
  });

  it("simulates 2-wire OR instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("123 -> x"), instruction("456 -> y"), instruction("x OR y -> e")]);
    expect(simulationResults.e).to.equal(507);
  });

  it("simulates 1-wire-1-signal OR instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("123 -> x"), instruction("x OR 456 -> e")]);
    expect(simulationResults.e).to.equal(507);
  });

  it("simulates LSHIFT instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("123 -> x"), instruction("x LSHIFT 2 -> f")]);
    expect(simulationResults.f).to.equal(492);
  });

  it("simulates RSHIFT instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("456 -> y"), instruction("y RSHIFT 2 -> g")]);
    expect(simulationResults.g).to.equal(114);
  });

  it("simulates NOT instruction", () => {
    var simulationResults = circuitSimulator.fromInstructions([instruction("123 -> x"), instruction("456 -> y"), instruction("NOT x -> h"), instruction("NOT y -> i")]);
    expect(simulationResults.h).to.equal(65412);
    expect(simulationResults.i).to.equal(65079);
  });
});

var instruction = (i) => instructions.fromString(i);
var singleInstruction = (i) => [instruction(i)];
