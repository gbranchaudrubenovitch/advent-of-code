var expect = require("chai").expect;
var instructions = require("../../src/day-06/instructions");

describe("Instructions", () => {
  it("can parse coordinates of an instruction", () => {
    var parsedInstruction = instructions.fromString("turn on 0,1 through 3,4");
    expect(parsedInstruction.coords.topLeft.x).to.equal(0);
    expect(parsedInstruction.coords.topLeft.y).to.equal(1);
    expect(parsedInstruction.coords.bottomRight.x).to.equal(3);
    expect(parsedInstruction.coords.bottomRight.y).to.equal(4);
  });

  it("can parse action of an instruction", () => {
    var parsedInstruction = instructions.fromString("turn off 0,2 through 4,2");
    expect(parsedInstruction.action).to.equal("turn off");
  });
});

var singleInstruction = (instruction) => [instructions.fromString(instruction)];
