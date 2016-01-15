var expect = require("chai").expect;
var containerParser = require("../../src/day-17/container-parser");

describe("Container parser", () => {
  it("parses containers", () => {
    var rawContainers = ["20", "15", "10"];

    var containers = containerParser.from(rawContainers);

    expect(containers).to.have.length(3).and.include(20).and.include(15).and.include(10);
  });
});
