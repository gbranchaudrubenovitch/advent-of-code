"use strict";

let neighborsCounter = require("./neighbors-counter");

let lightIsOn = (light) => light === "#";

let lightIsACorner = (grid, rowIndex, lightIndex) => {
  let currentRow = grid[rowIndex];
  if (rowIndex === 0 && (lightIndex === 0 || lightIndex === currentRow.length - 1)) {
    return true;
  } else if (rowIndex === grid.length - 1 && (lightIndex === 0 || lightIndex === currentRow.length - 1)) {
    return true;
  } else {
    return false;
  }
};

let countTurnedOnLights = (grid) => {
  let turnedOnLights = 0;
  for (let row of grid) {
    for (let light of row) {
      turnedOnLights += lightIsOn(light) ? 1 : 0;
    }
  }
  return turnedOnLights;
};

let computeNextState = (currentLight, turnedOnNeighbors, currentLightIsACorner, cornersAreStuckOn) => {
  if (cornersAreStuckOn && currentLightIsACorner) {
    return "#";
  } else if (lightIsOn(currentLight)) {
    return turnedOnNeighbors === 2 || turnedOnNeighbors === 3 ? "#" : ".";
  } else {
    return turnedOnNeighbors === 3 ? "#" : ".";
  }
};

let computeNextGrid = (currentGrid, cornersAreStuckOn) => {
  let nextGrid = [];
  for (let rowIndex = 0; rowIndex < currentGrid.length; rowIndex++) {
    let currentRow = currentGrid[rowIndex];
    nextGrid.push(new Array(currentRow.length));

    for (let lightIndex = 0; lightIndex < currentRow.length; lightIndex++) {
      let turnedOnNeighbors = neighborsCounter.turnedOnOnes(currentGrid, rowIndex, lightIndex);
      let currentLight = currentRow[lightIndex];
      let currentLightIsACorner = lightIsACorner(currentGrid, rowIndex, lightIndex);

      let newLightState = computeNextState(currentLight, turnedOnNeighbors, currentLightIsACorner, cornersAreStuckOn);
      nextGrid[rowIndex][lightIndex] = newLightState;
    }
  }
  return nextGrid;
};

let animateGrid = (initialGrid, stepsToAdvance, cornersAreStuckOn) => {
  let grid = initialGrid.map(row => row.split(""));
  for (let i = 0; i < stepsToAdvance; i++) {
    grid = computeNextGrid(grid, cornersAreStuckOn);
  }

  return {
    turnedOnLights: countTurnedOnLights(grid)
  };
};

exports.animateGrid = (initialGrid, stepsToAdvance) => {
  return animateGrid(initialGrid, stepsToAdvance, false);
};

exports.animateBrokenGrid = (initialGrid, stepsToAdvance) => {
  return animateGrid(initialGrid, stepsToAdvance, true);
};
