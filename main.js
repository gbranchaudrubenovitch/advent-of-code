"use strict";
var d01 = require("./src/day-01/solver");
var d02 = require("./src/day-02/solver");
var d03 = require("./src/day-03/solver");

console.time("challenges took");
console.log("**************ADVENT OF CODE**************");
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + d01.solvePartOne());
console.log("  --- Day 1: Not Quite Lisp (2/2) - " + d01.solvePartTwo());
console.log("  --- Day 2: I Was Told There Would Be No Math (1/2) - " + d02.solvePartOne());
console.log("  --- Day 2: I Was Told There Would Be No Math (2/2) - " + d02.solvePartTwo());
console.log("  --- Day 3: Perfectly Spherical Houses in a Vacuum (1/2) - " + d03.solvePartOne());
console.log("  --- Day 3: Perfectly Spherical Houses in a Vacuum (2/2) - " + d03.solvePartTwo());
console.timeEnd("challenges took");
