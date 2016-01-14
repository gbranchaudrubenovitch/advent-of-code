var expect = require("chai").expect;
var sueFinder = require("../../src/day-16/sue-finder");

describe("--- Day 16: (1/2) finding the right Sue --- ", () => {
  it("finds the number of the only Sue when all compounds match", () => {
    var theOnlySue = "Sue 22: children: 1, cats: 2, samoyeds: 3";
    var compoundsLeftOnTheGift = compounds(1, 2, 3);

    var theRightSueNumber = sueFinder.findTheRightSue([theOnlySue], compoundsLeftOnTheGift);

    expect(theRightSueNumber).to.equal(22);
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
