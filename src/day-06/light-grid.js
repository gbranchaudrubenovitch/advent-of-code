"use strict";

const MAX_ROWS = 1000;
const MAX_COLUMNS = 1000;

var computeNumberOfLitLights = (grid) => {
  let numberOfLitLights = 0;
  for (let i = 0; i < MAX_ROWS; i++) {
    if (!grid[i]) {
      continue;
    }
    for (let j = 0; j < MAX_COLUMNS; j++) {
      if (grid[i][j]) {
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
        grid[x] = new Array(1000);
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
  var grid = new Array(1000);
  for (let instruction of instructions) {
    followSingleInstruction(grid, instruction);
  }
  return {
    numberOfLitLights: computeNumberOfLitLights(grid)
  };
};
