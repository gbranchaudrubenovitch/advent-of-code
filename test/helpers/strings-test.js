var expect = require("chai").expect;
var strings = require("../../src/helpers/strings");
var fs = require("fs");

describe("Strings helper", function() {
  it("can read a resource file", function() {
    fs.writeFileSync("resources/test-res.txt", "1234567890", "utf8");

    expect(strings.fromResource("test-res.txt")).to.equal("1234567890");

    fs.unlinkSync("resources/test-res.txt");
  });
});
