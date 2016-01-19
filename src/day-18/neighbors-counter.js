"use strict";

let neighborsCounter = require("./neighbors-counter");

let lightIsOn = (light) => light === "#";

exports.turnedOnOnes = (grid, rowIndex, lightIndex) => {
  let turnedOnNeighbors = 0;
  let currentRow = grid[rowIndex];
  let rowAbove = rowIndex === 0 ? null : grid[rowIndex - 1];
  let rowBelow = rowIndex === grid.length - 1 ? null : grid[rowIndex + 1];
  let thereAreNeighborsOnTheLeft = lightIndex > 0;
  let thereAreNeighborsOnTheRight = lightIndex < currentRow.length - 1;

  if (rowAbove) {
    turnedOnNeighbors += thereAreNeighborsOnTheLeft && lightIsOn(rowAbove[lightIndex - 1]) ? 1 : 0;
    turnedOnNeighbors += lightIsOn(rowAbove[lightIndex]) ? 1 : 0;
    turnedOnNeighbors += thereAreNeighborsOnTheRight && lightIsOn(rowAbove[lightIndex + 1]) ? 1 : 0;
  }

  turnedOnNeighbors += thereAreNeighborsOnTheLeft && lightIsOn(currentRow[lightIndex - 1]) ? 1 : 0;
  turnedOnNeighbors += thereAreNeighborsOnTheRight && lightIsOn(currentRow[lightIndex + 1]) ? 1 : 0;

  if (rowBelow) {
    turnedOnNeighbors += thereAreNeighborsOnTheLeft && lightIsOn(rowBelow[lightIndex - 1]) ? 1 : 0;
    turnedOnNeighbors += lightIsOn(rowBelow[lightIndex]) ? 1 : 0;
    turnedOnNeighbors += thereAreNeighborsOnTheRight && lightIsOn(rowBelow[lightIndex + 1]) ? 1 : 0;
  }

  return turnedOnNeighbors;
};
