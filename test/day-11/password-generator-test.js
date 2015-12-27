var expect = require("chai").expect;
var passwordGenerator = require("../../src/day-11/password-generator");

describe("--- Day 11: (1/2) next password --- ", () => {
  it("returns abcdffaa as next valid password after abcdefgh", () => {
    expect(passwordGenerator.nextValidPasswordAfter("abcdefgh")).to.equal("abcdffaa");
  });
});
