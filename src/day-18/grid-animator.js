"use strict";

let lightIsOn = (light) => light === "#";

let countTurnedOnLights = (grid) => {
  let turnedOnLights = 0;
  for (let row of grid) {
    for (let light of row) {
      turnedOnLights += lightIsOn(light) ? 1 : 0;
    }
  }
  return turnedOnLights;
};

let countTurnedOnNeighbors = (grid, rowIndex, lightIndex) => {
  let rowAbove = rowIndex === 0 ? null : grid[rowIndex - 1];
  let rowBelow = rowIndex === grid.length - 1 ? null : grid[rowIndex + 1];

  // todo: fix
  return 0;
};

let computeNextState = (currentLight, turnedOnNeighbors) => {
  if (lightIsOn(currentLight)) {
    return turnedOnNeighbors === 2 || turnedOnNeighbors === 3;
  } else {
    return turnedOnNeighbors === 3;
  }
};

let computeNextGrid = (currentGrid) => {
  let nextGrid = [];
  for (let rowIndex = 0; rowIndex < currentGrid.length; rowIndex++) {
    let currentRow = currentGrid[rowIndex];
    nextGrid.push(new Array(currentRow.length));

    for (let lightIndex = 0; lightIndex < currentRow.length; lightIndex++) {
      let turnedOnNeighbors = countTurnedOnNeighbors(currentGrid, rowIndex, lightIndex);
      let currentLight = currentRow[lightIndex];

      let newLightState = computeNextState(currentLight, turnedOnNeighbors);
      nextGrid[rowIndex][lightIndex] = newLightState;
    }
  }
  return nextGrid;
};

exports.animateGrid = (initialGrid, stepsToAdvance) => {
  let grid = initialGrid.map(row => row.split(""));
  for (let i = 0; i < stepsToAdvance; i++) {
    grid = computeNextGrid(grid);
  }

  return {
    turnedOnLights: countTurnedOnLights(grid)
  };
};
