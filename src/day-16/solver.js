"use strict";

let readAllLines = require("../helpers/resources").readAllLines;
let sueFinder = require("./sue-finder");

let allSues = readAllLines("day-16-input.txt");
let compoundsLeftOnTheGift = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

exports.solvePartOne = () => {
  return "It's Sue #" + sueFinder.findTheRightSue(allSues, compoundsLeftOnTheGift) + " that sent the gift";
};

exports.solvePartTwo = () => {
  return "It's REALLY Sue #" + sueFinder.findTheRightSueTakingIntoAccountInexactitude(allSues, compoundsLeftOnTheGift) + " that sent the gift";
};
