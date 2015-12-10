var expect = require("chai").expect;
var hasher = require("../../src/day-04/hasher");

describe("Hasher computer", () => {
  it("can compute the MD5 of 'abcdefg123'", () => {
    expect(hasher.computeMd5("abcdefg123").toString("hex")).to.equal("cc0b044bf6d02448f2ff41b8c422be5d");
  });

  it("can compute 2 hashes back-to-back", () => {
    expect(hasher.computeMd5("abcdefg123").toString("hex")).to.equal("cc0b044bf6d02448f2ff41b8c422be5d");
    expect(hasher.computeMd5("some-other-value").toString("hex")).to.equal("e5e2edf47fbd08fe4044959e9fa3b53b");
  });
});
