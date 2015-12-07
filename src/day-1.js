"use strict";

var fromResource = require("./helpers/lines").fromResource;

module.exports = class Santa {
  static solvePartOne() {
    var santa = new Santa();
    santa.followInstructions(fromResource("day-1-input.txt")[0]);
    return "Santa ends up on floor " + santa.currentFloor;
  }

  static solvePartTwo() {
    var santa = new Santa();
    santa.followInstructions(fromResource("day-1-input.txt")[0]);
    return "Santa first enters the basement at char " + santa.firstEnteredBasementAtChar;
  }

  constructor() {
    this.currentFloor = 0;
    this.firstEnteredBasementAtChar = NaN;
  }

  followInstructions(instructions) {
    instructions.split("").forEach((i, index) => {
      this.currentFloor = this.currentFloor + (i === "(" ? 1 : -1);

      if (this.currentFloor === -1 && Number.isNaN(this.firstEnteredBasementAtChar)) {
        this.firstEnteredBasementAtChar = index + 1;
      }
    });
  }
};
