import resourceHelper from "../helpers/resources";
import { fromLines } from "./presents-builder";
import WrapperComputer from "./wrapper-computer";

var computer = new WrapperComputer().loadPresents(...fromLines(resourceHelper.readAllLines("day-2-input.txt")));

export function solvePartOne() {
  return "Elves should order " + computer.paperSurfaceRequired + " square feet of wrapping paper.";
};

export function solvePartTwo() {
  return "Elves should order " + computer.ribbonLengthRequired + " feet of ribbon.";
};
