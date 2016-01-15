var expect = require("chai").expect;
var sueFinder = require("../../src/day-16/sue-finder");

describe("--- Day 16: (1/2) finding the right Sue --- ", () => {
  it("finds the number of the only Sue", () => {
    var theOnlySue = "Sue 22: children: 1, cats: 2, samoyeds: 3";
    var compoundsLeftOnTheGift = compounds(1, 2, 3);

    var theRightSueNumber = sueFinder.findTheRightSue([theOnlySue], compoundsLeftOnTheGift);

    expect(theRightSueNumber).to.equal(22);
  });

  it("finds the number of the right Sue", () => {
    var sues = ["Sue 42: trees: 6, pomeranians: 9, goldfish: 8", "Sue 128: cars: 9, children: 1, cats: 1"];
    var compoundsLeftOnTheGift = compounds(1, 1, 3, 4, 5, 6, 7, 8, 9, 10);

    var theRightSueNumber = sueFinder.findTheRightSue(sues, compoundsLeftOnTheGift);

    expect(theRightSueNumber).to.equal(128);
  });
});

var compounds = (children, cats, samoyeds, pomeranians, akitas, vizslas, goldfish, trees, cars, perfumes) => {
  return {
    children: children,
    cats: cats,
    samoyeds: samoyeds,
    pomeranians: pomeranians,
    akitas: akitas,
    vizslas: vizslas,
    goldfish: goldfish,
    trees: trees,
    cars: cars,
    perfumes: perfumes,
  };
};
