"use strict";
var Santa = require("./src/day-1");
var wrapperComputer = require("./src/day-2");

console.time("challenges took");
console.log("**************ADVENT OF CODE**************");
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + Santa.solvePartOne());
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + Santa.solvePartTwo());
console.log("  --- Day 2: I Was Told There Would Be No Math (1/2) - " + wrapperComputer.solvePartOne());

console.timeEnd("challenges took");
