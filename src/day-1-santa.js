module.exports = function() {
  var currentFloor = 0;

  return {
    currentFloor: () => currentFloor,

    followInstructions: (instructions) => {
      console.log("follow", this);
      if (instructions[0] === "(") {
        currentFloor++;
      } else if (instructions[0] === ")") {
        currentFloor--;
      }
    }
  };
};
