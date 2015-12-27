var expect = require("chai").expect;
var passwordGenerator = require("../../src/day-11/password-generator");

describe("Password generator", () => {
  it("returns xy after xx", () => {
    expect(passwordGenerator.nextPasswordAfter("xx")).to.equal("xy");
  });
  
  it("returns ya after xz", () => {
    expect(passwordGenerator.nextPasswordAfter("xz")).to.equal("ya");
  });
  
  it("returns caa after bzz", () => {
    expect(passwordGenerator.nextPasswordAfter("bzz")).to.equal("caa");
  });
});
