var fromResource = require("./helpers/strings").fromResource;

var aSanta = function() {
  return new Santa();
};
exports.aSanta = aSanta;

exports.solve = () => {
  var santa = aSanta();
  santa.followInstructions(fromResource("day-1-santa-instructions.txt"));
  return "Santa ends up on floor " + santa.currentFloor();
};

function Santa() {
  var currentFloor = 0;
  return {
    currentFloor: () => currentFloor,

    followInstructions: (instructions) => {
      instructions.split("").forEach((i) => {
        if (i !== "(" && i !== ")") {
          return;
        }
        currentFloor = currentFloor + (i === "(" ? 1 : -1);
      });
    }
  };
}
