"use strict";

const MAX_ROWS = 1000;
const MAX_COLUMNS = 1000;

var loopAndCount = (grid, counter) => {
  let count = 0;
  for (let i = 0; i < MAX_ROWS; i++) {
    if (!grid[i]) {
      continue;
    }
    for (let j = 0; j < MAX_COLUMNS; j++) {
      if (grid[i][j]) {
        count += counter(grid[i][j]);
      }
    }
  }
  return count;
};

var computeNumberOfLitLights = (grid) => loopAndCount(grid, (light) => 1);
var computeTotalBrightness = (grid) => loopAndCount(grid, (lightBrightness) => lightBrightness);

var followSingleInstruction = (grid, instruction, lightWirer) => {
  for (let x = instruction.coords.topLeft.x; x <= instruction.coords.bottomRight.x; x++) {
    for (let y = instruction.coords.topLeft.y; y <= instruction.coords.bottomRight.y; y++) {
      if (!grid[x]) {
        grid[x] = new Array(MAX_COLUMNS);
      }
      grid[x][y] = lightWirer(grid[x][y], instruction);
    }
  }
};

var ledsWithOneBrightness = (currentLightIsLit, instruction) => {
  if (instruction.action === "toggle") {
    return !currentLightIsLit;
  } else {
    return instruction.action === "turn on";
  }
};

var ledsWithMultipleBrightness = (currentLightBrightness, instruction) => {
  let originalBrightness = !currentLightBrightness ? 0 : currentLightBrightness;
  if (instruction.action === "toggle") {
    return originalBrightness + 2;
  } else {
    return instruction.action === "turn on" ? originalBrightness + 1 : Math.max(originalBrightness - 1, 0);
  }
};

exports.follow = function follow(instructions) {
  let grid = new Array(MAX_ROWS);

  for (let instruction of instructions) {
    followSingleInstruction(grid, instruction, ledsWithOneBrightness);
  }
  return {
    numberOfLitLights: computeNumberOfLitLights(grid)
  };
};

exports.followForMultipleBrightness = function followForMultipleBrightness(instructions) {
  let grid = new Array(MAX_ROWS);

  for (let instruction of instructions) {
    followSingleInstruction(grid, instruction, ledsWithMultipleBrightness);
  }
  return {
    totalBrightness: computeTotalBrightness(grid)
  };
};
