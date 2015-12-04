module.exports = function() {
  var currentFloor = 0;

  return {
    currentFloor: () => currentFloor,

    followInstructions: (instructions) => {
      instructions.split("").forEach((i) => currentFloor = currentFloor + (i == "(" ? 1 : -1));
    },

    solve: () => {
      return "TODO - print results in one string";
    }
  };
};
