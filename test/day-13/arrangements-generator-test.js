var expect = require("chai").expect;
var generator = require("../../src/day-13/arrangements-generator");

describe("Arrangements Generator", () => {
  it("can find the one arrangement possible with 2 guests", () => {
    var arrangements = generator.generateAllFrom(["Alex", "Barb"]);
    expect(arrangements).to.have.length(1);
    expect(arrangements[0]).to.deep.equal(["Alex", "Barb"]);
  });

  it("can find the 2 arrangements possible with 3 guests", () => {
    var arrangements = generator.generateAllFrom(["Alex", "Barb", "Candice"]);
    expect(arrangements).to.have.length(6);
  // [Alex, Barb, Candice] [Alex, Candice, Barb] [Barb, Alex, Candice] [Barb, Candice, Alex] [Candice, Alex, Barb] [Candice, Barb, Alex]
  });
});
