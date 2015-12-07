"use strict";

var fromResource = require("./helpers/strings").fromResource;

module.exports = class Santa {
  static solvePartOne() {
    var santa = new Santa();
    santa.followInstructions(fromResource("day-1-input.txt"));
    return "Santa ends up on floor " + santa.currentFloor;
  }

  static solvePartTwo() {
    var santa = new Santa();
    santa.followInstructions(fromResource("day-1-input.txt"));
    return "Santa first enters the basement at char " + santa.firstEnteredBasementAt;
  }

  constructor() {
    this.currentFloor = 0;
    this.firstEnteredBasementAtChar = NaN;
  }

  followInstructions(instructions) {
    instructions.split("").forEach((i, index) => {
      if (i !== "(" && i !== ")") {
        return;
      }
      this.currentFloor = this.currentFloor + (i === "(" ? 1 : -1);

      if (this.currentFloor === -1 && Number.isNaN(this.firstEnteredBasementAtChar)) {
        this.firstEnteredBasementAtChar = index + 1;
      }
    });
  }
};
