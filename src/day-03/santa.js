"use strict";

var coordinates = require("./coordinates");

var moveToNextHouse = (currentCoordinates, nextMove) => coordinates.applyMove(currentCoordinates, nextMove);

var deliverPresentToFirstHouse = (presentTracker) => {
  deliverPresentToHouse(presentTracker, coordinates.atOrigin());
};

var deliverPresentToHouse = (presentTracker, houseCoordinates) => {
  var houseAdress = coordinates.stringOf(houseCoordinates);
  presentTracker.set(houseAdress, true);
};

var computeUniqueHousesVisited = (presentTracker) => {
  return presentTracker.size;
};

exports.deliverPresents = function deliversPresents(instructions) {
  var presentTracker = new Map();
  var currentCoordinates = coordinates.atOrigin();
  deliverPresentToFirstHouse(presentTracker);

  var splitInstructions = instructions.split("");
  for (var nextMove of splitInstructions) {
    currentCoordinates = moveToNextHouse(currentCoordinates, nextMove);
    deliverPresentToHouse(presentTracker, currentCoordinates);
  }

  return {
    uniqueHousesVisited: computeUniqueHousesVisited(presentTracker)
  };
};
