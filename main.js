"use strict";
console.time("challenges took");

var d01 = require("./src/day-01/solver");
var d02 = require("./src/day-02/solver");
var d03 = require("./src/day-03/solver");
var d04 = require("./src/day-04/solver");
var d05 = require("./src/day-05/solver");
var d06 = require("./src/day-06/solver");

console.log("**************ADVENT OF CODE**************");
console.log("  --- Day 1: Not Quite Lisp (1/2) - " + d01.solvePartOne());
console.log("  --- Day 1: Not Quite Lisp (2/2) - " + d01.solvePartTwo());
console.log("  --- Day 2: I Was Told There Would Be No Math (1/2) - " + d02.solvePartOne());
console.log("  --- Day 2: I Was Told There Would Be No Math (2/2) - " + d02.solvePartTwo());
console.log("  --- Day 3: Perfectly Spherical Houses in a Vacuum (1/2) - " + d03.solvePartOne());
console.log("  --- Day 3: Perfectly Spherical Houses in a Vacuum (2/2) - " + d03.solvePartTwo());
console.log("  --- Day 4: The Ideal Stocking Stuffer (1/2) - (disabled b/c slow ~1.5s)"); // + d04.solvePartOne());
console.log("  --- Day 4: The Ideal Stocking Stuffer (2/2) - (disabled b/c slow ~50s)"); // + d04.solvePartTwo());
console.log("  --- Day 5: Doesn't He Have Intern-Elves For This? (1/2) - " + d05.solvePartOne());
console.log("  --- Day 5: Doesn't He Have Intern-Elves For This? (2/2) - " + d05.solvePartTwo());
console.log("  --- Day 6: Probably a Fire Hazard (1/2) - " + d06.solvePartOne());
console.log("  --- Day 6: Probably a Fire Hazard (2/2) - " + d06.solvePartTwo());

console.timeEnd("challenges took");
