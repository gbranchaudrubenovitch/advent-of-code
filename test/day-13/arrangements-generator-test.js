var expect = require("chai").expect;
var generator = require("../../src/day-13/arrangements-generator");

describe("Arrangements Generator", () => {
  it("can find the 2 arrangements possible with 2 guests", () => {
    var arrangements = generator.generateAllFrom(["Alex", "Barb"]);
    expect(arrangements).to.have.length(2);
    expect(arrangements[0]).to.deep.equal(["Alex", "Barb"]);
    expect(arrangements[1]).to.deep.equal(["Barb", "Alex"]);
  });

  it("can find the 6 arrangements possible with 3 guests", () => {
    var arrangements = generator.generateAllFrom(["Alex", "Barb", "Candice"]);
    expect(arrangements).to.have.length(6);
  });
});
