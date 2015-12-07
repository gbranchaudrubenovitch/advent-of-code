"use strict";

var requiredSlack = (surfaceA, surfaceB, surfaceC) => {
  return Math.min(surfaceA, surfaceB, surfaceC);
};

var paperSurfaceRequiredForPresent = (present) => {
  var surfaceA = present.length * present.width;
  var surfaceB = present.width * present.height;
  var surfaceC = present.height * present.length;
  return 2 * surfaceA + 2 * surfaceB + 2 * surfaceC + requiredSlack(surfaceA, surfaceB, surfaceC);
};

module.exports = class WrapperComputer {
constructor() {
  this.paperSurfaceRequired = 0;
  this.ribbonLengthRequired = 0;
}

loadPresents(...presents) {
  for (let p of presents) {
    this.paperSurfaceRequired += paperSurfaceRequiredForPresent(p);
  }
  return this;
}
};
