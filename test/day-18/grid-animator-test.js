var expect = require("chai").expect;
var gridAnimator = require("../../src/day-18/grid-animator");

describe("--- Day 18: (1/2) animate grid --- ", () => {
  it("counts the turned on lights on a static grid", () => {
    var staticGrid = [
      ".....",
      ".....",
      "..#...",
      "..##..",
      ".....",
      "....."];

    expect(gridAnimator.animateGrid(staticGrid, 0).turnedOnLights).to.equal(3);
  });

  it("counts the turned on lights after 1 step", () => {
    var initialGrid = [
      ".#.#.#",
      "...##.",
      "#....#",
      "..#...",
      "#.#..#",
      "####.."];

    expect(gridAnimator.animateGrid(initialGrid, 1).turnedOnLights).to.equal(11);
  });
});
