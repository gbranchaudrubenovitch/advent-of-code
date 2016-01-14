var expect = require("chai").expect;
var sueParser = require("../../src/day-16/sue-parser");

describe("Sue parser", () => {
  it("parses a Sue with all compounds", () => {
    var rawSue = "Sue 44: children: 1, cats: 2, samoyeds: 3, pomeranians: 4, akitas: 5, vizslas: 6, goldfish: 7, trees: 8, cars: 9, perfumes: 10";

    var sue = sueParser.from([rawSue])[0];

    expect(sue.number).to.equal(44);
    expect(sue.children).to.equal(1);
    expect(sue.cats).to.equal(2);
    expect(sue.samoyeds).to.equal(3);
    expect(sue.pomeranians).to.equal(4);
    expect(sue.akitas).to.equal(5);
    expect(sue.vizslas).to.equal(6);
    expect(sue.goldfish).to.equal(7);
    expect(sue.trees).to.equal(8);
    expect(sue.cars).to.equal(9);
    expect(sue.perfumes).to.equal(10);
  });

  it("parses a Sue with some missing compounds", () => {
    var rawSue = "Sue 55: samoyeds: 3";

    var sue = sueParser.from([rawSue])[0];

    expect(sue.number).to.equal(55);
    expect(sue.samoyeds).to.equal(3);
    expect(sue.akitas).to.equal(undefined);
    expect(sue.trees).to.equal(undefined);
  });
});
