var expect = require("chai").expect;
var segments = require("../../src/day-09/segments");
var TravelingSanta = require("../../src/day-09/traveling-santa");

describe("--- Day 9: (1/2) shortest path --- ", () => {
  it("computes length of tour with one segment", () => {
    var santa = new TravelingSanta(parse("London to Dublin = 464"));
    expect(santa.computeLengthOfShortestRouteAcrossAllCities()).to.equal(464);
  });

  it("computes length of tour with 3 segments", () => {
    var santa = new TravelingSanta(parse("London to Dublin = 464", "London to Belfast = 518", "Dublin to Belfast = 141"));
    expect(santa.computeLengthOfShortestRouteAcrossAllCities()).to.equal(605);
  });
});

describe("--- Day 9: (2/2) longest path --- ", () => {
  it("computes length of tour with 3 segments", () => {
    var santa = new TravelingSanta(parse("London to Dublin = 464", "London to Belfast = 518", "Dublin to Belfast = 141"));
    expect(santa.computeLengthOfLongestRouteAcrossAllCities()).to.equal(982);
  });
});

var parse = (...s) => segments.fromStrings(s);
