var expect = require("chai").expect;
var neighborsCounter = require("../../src/day-18/neighbors-counter");

describe("Neighbors Counter", () => {
  it("counts the turned on neighbors of the centered light", () => {
    var grid = [
      "##.",
      "..#",
      "#.."].map(row => row.split(""));

    expect(neighborsCounter.turnedOnOnes(grid, 1, 1)).to.equal(4);
  });

  it("counts the turned on neighbors of a corner light", () => {
    var grid = [
      "###",
      "#...",
      ".#.."].map(row => row.split(""));

    expect(neighborsCounter.turnedOnOnes(grid, 0, 0)).to.equal(2);
  });
});
