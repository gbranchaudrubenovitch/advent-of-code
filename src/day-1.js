var fromResource = require("./helpers/strings").fromResource;

var aSanta = function() {
  return new Santa();
};
exports.aSanta = aSanta;

exports.solvePartOne = () => {
  var santa = aSanta();
  santa.followInstructions(fromResource("day-1-input.txt"));
  return "Santa ends up on floor " + santa.currentFloor();
};

exports.solvePartTwo = () => {
  var santa = aSanta();
  santa.followInstructions(fromResource("day-1-input.txt"));
  return "Position of the char that causes Santa to first enter the basement is " + santa.firstEnteredBasementAt();
};

function Santa() {
  var currentFloor = 0;
  var firstEnteredBasementAtChar = NaN;
  return {
    currentFloor: () => currentFloor,

    firstEnteredBasementAt: () => firstEnteredBasementAtChar,

    followInstructions: (instructions) => {
      instructions.split("").forEach((i, index) => {
        if (i !== "(" && i !== ")") {
          return;
        }
        currentFloor = currentFloor + (i === "(" ? 1 : -1);

        if (currentFloor === -1 && Number.isNaN(firstEnteredBasementAtChar)) {
          firstEnteredBasementAtChar = index + 1;
        }
      });
    }

  };
}
