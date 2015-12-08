"use strict";

var copyOf = (existingCoordinates) => {
  return {
    x: existingCoordinates.x,
    y: existingCoordinates.y
  };
};

exports.stringOf = (coordinates) => {
  return `(${coordinates.x},${coordinates.y})`;
};

exports.atOrigin = () => {
  return {
    x: 0,
    y: 0
  };
};

exports.applyMove = (currentCoordinates, moveToApply) => {
  var updatedCoordinates = copyOf(currentCoordinates);
  switch (moveToApply) {
  case "^":
    updatedCoordinates.y++;
    break;
  case "v":
    updatedCoordinates.y--;
    break;
  case ">":
    updatedCoordinates.x++;
    break;
  case "<":
    updatedCoordinates.x--;
    break;
  }
  return updatedCoordinates;
};
