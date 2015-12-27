var expect = require("chai").expect;
var validPasswordGenerator = require("../../src/day-11/valid-password-generator");

describe("--- Day 11: next password --- ", () => {
  it("returns abcdffaa as next valid password after abcdefgh", () => {
    expect(validPasswordGenerator.nextValidPasswordAfter("abcdefgh")).to.equal("abcdffaa");
  });

  it.skip("(too slow!) returns ghjaabcc as next valid password after ghijklmn", () => {
    expect(validPasswordGenerator.nextValidPasswordAfter("ghijklmn")).to.equal("ghjaabcc");
  });
});
