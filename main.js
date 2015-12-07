"use strict";
var d01 = require("./src/day-01/solver");
var d02 = require("./src/day-02/solver");

console.time("challenges took");
console.log("**************ADVENT OF CODE**************");
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + d01.solvePartOne());
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + d01.solvePartTwo());
console.log("  --- Day 2: I Was Told There Would Be No Math (1/2) - " + d02.solvePartOne());

console.timeEnd("challenges took");
