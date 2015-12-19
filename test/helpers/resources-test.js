var expect = require("chai").expect;
var resources = require("../../src/helpers/resources");
var fs = require("fs");

describe("Resources helper", function() {
  it("can read all lines of 1-line resource file", function() {
    fs.writeFileSync("resources/test-res.txt", "1234567890", "utf8");

    expect(resources.readAllLines("test-res.txt")).to.have.length(1).and.include("1234567890");

    fs.unlinkSync("resources/test-res.txt");
  });

  it("can read all lines of 3-lines (backslash-n) resource file", function() {
    fs.writeFileSync("resources/test-2-lines-linux.txt", "12345\n67890\n", "utf8");

    var allLines = resources.readAllLines("test-2-lines-linux.txt");
    expect(allLines).to.have.length(2).and.include("12345").and.include("67890");

    fs.unlinkSync("resources/test-2-lines-linux.txt");
  });

  it("can read all lines of 3-lines (backslash-r + backslash-n) resource file", function() {
    fs.writeFileSync("resources/test-2-lines-windows.txt", "abc\r\ndef\r\n", "utf8");

    var allLines = resources.readAllLines("test-2-lines-windows.txt");
    expect(allLines).to.have.length(2).and.include("abc").and.include("def");

    fs.unlinkSync("resources/test-2-lines-windows.txt");
  });
});
