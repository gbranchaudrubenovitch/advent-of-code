var expect = require("chai").expect;
var segments = require("../../src/day-09/segments");
var TravelingSanta = require("../../src/day-09/traveling-santa");

describe("--- Day 9: (1/2) shortest path --- ", () => {
  it("can read a single route", () => {
    var santa = new TravelingSanta(singleRoadSegment("London to Dublin = 464"));
    expect(santa.computeLengthOfShortestRouteAcrossAllCities()).to.equal(464);
  });
});

var singleRoadSegment = (s) => segments.fromStrings([s]);
