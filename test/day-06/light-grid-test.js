var expect = require("chai").expect;
var instructions = require("../../src/day-06/instructions");
var lightGrid = require("../../src/day-06/light-grid");

describe("--- Day 6: (1/2) light the lights ---", () => {
  it("lights 4 lights for 'turn on 0,2 through 3,2'", () => {
    expect(lightGrid.follow(singleInstruction("turn on 0,2 through 3,2")).numberOfLitLights).to.equal(4);
  });

  it("lights 12 lights for 'turn on 0,0 through 2,3'", () => {
    expect(lightGrid.follow(singleInstruction("turn on 0,0 through 2,3")).numberOfLitLights).to.equal(12);
  });

  it("lights 0 lights for 'turn off 0,0 through 0,1'", () => {
    expect(lightGrid.follow(singleInstruction("turn off 0,0 through 0,1")).numberOfLitLights).to.equal(0);
  });

  it("lights 2 lights for 'toggle 0,0 through 0,1'", () => {
    expect(lightGrid.follow(singleInstruction("toggle 0,0 through 0,1")).numberOfLitLights).to.equal(2);
  });
});

var singleInstruction = (instruction) => [instructions.fromString(instruction)];
