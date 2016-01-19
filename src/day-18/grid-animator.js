"use strict";

let neighborsCounter = require("./neighbors-counter");

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
      let turnedOnNeighbors = neighborsCounter.turnedOnOnes(currentGrid, rowIndex, lightIndex);
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
