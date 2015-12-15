"use strict";

var computeNumberOfLitLights = (grid) => {
  let numberOfLitLights = 0;
  for (let row of grid) {
    for (let cell of row) {
      if (cell) {
        numberOfLitLights++;
      }
    }
  }
  return numberOfLitLights;
};

var followSingleInstruction = (grid, instruction) => {
  for (let x = instruction.coords.topLeft.x; x <= instruction.coords.bottomRight.x; x++) {
    for (let y = instruction.coords.topLeft.y; y <= instruction.coords.bottomRight.y; y++) {
      if (!grid[x]) {
        grid[x] = [];
      }
      if (instruction.action === "toggle") {
        grid[x][y] = !grid[x][y];
      } else {
        grid[x][y] = instruction.action === "turn on";
      }
    }
  }
};

exports.follow = function follow(instructions) {
  var grid = [];
  for (let instruction of instructions) {
    followSingleInstruction(grid, instruction);
  }
  return {
    numberOfLitLights: computeNumberOfLitLights(grid)
  };
};
