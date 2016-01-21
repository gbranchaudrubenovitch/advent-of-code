var expect = require("chai").expect;
var replacementsParser = require("../../src/day-19/replacements");

describe("Replacements", () => {
  it("parses H -> OH", () => {
    var parsedReplacements = replacementsParser.from(["H => OH"]); 
    expect(parsedReplacements).to.have.length(1);

    expect(parsedReplacements[0].match).to.equal("H");
    expect(parsedReplacements[0].replacement).to.equal("OH");
  });

  it("parses 2 replacements", () => {
    var parsedReplacements = replacementsParser.from(["H => OH", "yyy => f"]); 
    expect(parsedReplacements).to.have.length(2);

    expect(parsedReplacements[1].match).to.equal("yyy");
    expect(parsedReplacements[1].replacement).to.equal("f");
  });
});
