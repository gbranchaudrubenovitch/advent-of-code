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
    var compoundsLeftOnTheGift = nineCars();

    var theRightSueNumber = sueFinder.findTheRightSue(sues, compoundsLeftOnTheGift);

    expect(theRightSueNumber).to.equal(128);
  });
});

describe("--- Day 16: (2/2) finding the right Sue accounting for the inexactitude of the readings --- ", () => {
  it("finds the number of the right Sue when cats and trees are ranges", () => {
    var sues = ["Sue 42: trees: 10, cats: 2", "Sue 128: cats: 2"];
    var compoundsLeftOnTheGift = moreThanEightTrees();

    var theRightSueNumber = sueFinder.findTheRightSueTakingIntoAccountInexactitude(sues, compoundsLeftOnTheGift);

    expect(theRightSueNumber).to.equal(42);
  });

  it("finds the number of the right Sue when pomeranians and goldfish are ranges", () => {
    var sues = ["Sue 64: pomeranians: 4", "Sue 96: pomeranians: 6, goldfish: 8"];
    var compoundsLeftOnTheGift = lessThanFivePomeranians();

    var theRightSueNumber = sueFinder.findTheRightSueTakingIntoAccountInexactitude(sues, compoundsLeftOnTheGift);
    expect(theRightSueNumber).to.equal(64);
  });
});

var lessThanFivePomeranians = () => {
  return compounds(1, 1, 1, 5, 1, 1, 1, 1, 1, 1);
};

var moreThanEightTrees = () => {
  return compounds(1, 1, 1, 1, 1, 1, 1, 8, 1, 1);
};

var nineCars = () => {
  return compounds(1, 1, 1, 1, 1, 1, 1, 1, 9, 1);
};

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
