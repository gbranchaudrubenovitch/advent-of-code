console.time("challenges took");
var santa = require("./src/day-1");

console.log("**************ADVENT OF CODE**************");
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + santa.solvePartOne());
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + santa.solvePartTwo());

console.timeEnd("challenges took");
