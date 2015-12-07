var expect = require("chai").expect;
var lines = require("../../src/helpers/lines");
var fs = require("fs");

describe("Lines helper", function () {
  it("can read line of resource file", function () {
    fs.writeFileSync("resources/test-res.txt", "1234567890", "utf8");

    expect(lines.fromResource("test-res.txt")).to.have.length(1).and.include("1234567890");

    fs.unlinkSync("resources/test-res.txt");
  });

  it("can read all lines of resource file", function () {
    fs.writeFileSync("resources/test-2-lines.txt", "12345\n67890\n", "utf8");

    var parsedLines = lines.fromResource("test-2-lines.txt");
    expect(parsedLines).to.have.length(2).and.include("12345").and.include("67890");

    fs.unlinkSync("resources/test-2-lines.txt");
  });
});
