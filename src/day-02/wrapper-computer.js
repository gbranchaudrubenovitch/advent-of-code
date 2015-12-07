"use strict";

var requiredSlack = (surfaceA, surfaceB, surfaceC) => {
  return Math.min(surfaceA, surfaceB, surfaceC);
};

var smallestPerimeter = (perimeterA, perimeterB, perimeterC) => {
  return Math.min(perimeterA, perimeterB, perimeterC);
};

var bowRibbonLength = (present) => {
  return present.length * present.width * present.height;
};

var paperSurfaceRequiredForPresent = (present) => {
  var surfaceA = present.length * present.width;
  var surfaceB = present.width * present.height;
  var surfaceC = present.height * present.length;
  return 2 * surfaceA + 2 * surfaceB + 2 * surfaceC + requiredSlack(surfaceA, surfaceB, surfaceC);
};

var ribbonLengthRequiredForPresent = (present) => {
  var perimeterA = 2 * (present.length + present.width);
  var perimeterB = 2 * (present.width + present.height);
  var perimeterC = 2 * (present.height + present.length);
  return smallestPerimeter(perimeterA, perimeterB, perimeterC) + bowRibbonLength(present);
};

module.exports = class WrapperComputer {
constructor() {
  this.paperSurfaceRequired = 0;
  this.ribbonLengthRequired = 0;
}

loadPresents(...presents) {
  for (let p of presents) {
    this.paperSurfaceRequired += paperSurfaceRequiredForPresent(p);
    this.ribbonLengthRequired += ribbonLengthRequiredForPresent(p);
  }
  return this;
}
};
