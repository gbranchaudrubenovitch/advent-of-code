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

var moveAndDeliverPresent = (currentCoordinates, nextMove, presentTracker) => {
  var updatedCoordinates = moveToNextHouse(currentCoordinates, nextMove);
  deliverPresentToHouse(presentTracker, updatedCoordinates);
  return updatedCoordinates;
};

var computeUniqueHousesVisited = (presentTracker) => {
  return presentTracker.size;
};

var deliverPresents = (instructions, useRobotAssistant) => {
  var presentTracker = new Map();
  var currentSantaCoordinates = coordinates.atOrigin();
  var currentRobotCoordinates = coordinates.atOrigin();
  deliverPresentToFirstHouse(presentTracker);

  var splitInstructions = instructions.split("");
  for (var i = 0; i < splitInstructions.length; i++) {
    var nextMove = splitInstructions[i];
    var robotTakesThisOne = useRobotAssistant && i % 2 === 0;
    if (robotTakesThisOne) {
      currentRobotCoordinates = moveAndDeliverPresent(currentRobotCoordinates, nextMove, presentTracker);
    } else {
      currentSantaCoordinates = moveAndDeliverPresent(currentSantaCoordinates, nextMove, presentTracker);
    }
  }

  return {
    uniqueHousesVisited: computeUniqueHousesVisited(presentTracker)
  };
};

exports.deliverPresentsWithRobot = function deliverPresentsWithRobot(instructions) {
  return deliverPresents(instructions, true);
};

exports.deliverPresentsAlone = function deliverPresentsAlone(instructions) {
  return deliverPresents(instructions, false);
};
