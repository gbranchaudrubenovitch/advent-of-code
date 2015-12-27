var expect = require("chai").expect;
var passwordValidator = require("../../src/day-11/password-validator");

describe("Password validator", () => {
  it("flags aabbcd as valid", () => {
    expect(passwordValidator.isValid("aabbcd")).to.equal(true);
  });
  
  it("flags abd as invalid (no increasing straight)", () => {
    expect(passwordValidator.isValid("abd")).to.equal(false);
  });

  it("flags abci, abco, abcl as invalid (use of i,o,l)", () => {
    expect(passwordValidator.isValid("abci")).to.equal(false);
    expect(passwordValidator.isValid("abco")).to.equal(false);
    expect(passwordValidator.isValid("abcl")).to.equal(false);
  });

  it("flags abcoo as invalid (no double pairs)", () => {
    expect(passwordValidator.isValid("abd")).to.equal(false);
  });

  it("flags abcfffrty as invalid (no double non-overlapping pairs)", () => {
    expect(passwordValidator.isValid("abcfffrty")).to.equal(false);
  });

  it("flags sample passwords as invalid", () => {
    expect(passwordValidator.isValid("hijklmmn")).to.equal(false);
    expect(passwordValidator.isValid("abbceffg")).to.equal(false);
    expect(passwordValidator.isValid("abbcegjk")).to.equal(false);
  });
});
