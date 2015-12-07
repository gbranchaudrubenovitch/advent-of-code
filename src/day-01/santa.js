"use strict";

module.exports = class Santa {
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
