var expect = require("chai").expect;
var segments = require("../../src/day-09/segments");

describe("Segments", () => {
  it("can parse a well-formed segment", () => {
    var parsedSegments = segments.fromStrings(["London to Dublin = 464"]);
    expect(parsedSegments).to.have.length(1);
    expect(parsedSegments[0].from).to.equal("London");
    expect(parsedSegments[0].to).to.equal("Dublin");
    expect(parsedSegments[0].distance).to.equal(464);
  });

  it("can parse 2 well-formed segments", () => {
    var parsedSegments = segments.fromStrings(["London to Dublin = 464", "Dublin to Belfast = 555"]);
    expect(parsedSegments).to.have.length(2);
  });
});
