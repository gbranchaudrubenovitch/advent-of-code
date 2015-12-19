var expect = require("chai").expect;
var charCounter = require("../../src/day-08/character-counter");

describe("--- Day 8: (1/2) counting code & in-memory chars --- ", () => {
  it("can count code characters of an empty string", () => {
    expect(charCounter.count(singleString('""')).totalNumberOfCodeChars).to.equal(2);
  });

  it("can count code characters of a string with hex-encoded char", () => {
    expect(charCounter.count(singleString('"\\x27"')).totalNumberOfCodeChars).to.equal(6);
  });

  it("can count code characters of 2 strings", () => {
    expect(charCounter.count(['""', '"aaa\\"aaa"']).totalNumberOfCodeChars).to.equal(12);
  });

  it("can count in-memory characters of an empty string", () => {
    expect(charCounter.count(singleString('""')).totalNumberOfInMemoryChars).to.equal(0);
  });

  it("can count in-memory characters of a string", () => {
    expect(charCounter.count(singleString('"abc"')).totalNumberOfInMemoryChars).to.equal(3);
  });

  it("can count in-memory characters of a string with escaped quote", () => {
    expect(charCounter.count(singleString('"aaa\\"aaa"')).totalNumberOfInMemoryChars).to.equal(7);
  });

  it("can count in-memory characters of a string with escaped backslash", () => {
    expect(charCounter.count(singleString('"\\\\"')).totalNumberOfInMemoryChars).to.equal(1);
  });

  it("can count in-memory characters of a string with hex-encoded char", () => {
    expect(charCounter.count(singleString('"\\x27"')).totalNumberOfInMemoryChars).to.equal(1);
  });

  it("can compute the right total with the example strings", () => {
    var results = charCounter.count(['""','"abc"', '"aaa\\"aaa"', '"\\x27"']);
    expect(results.totalNumberOfCodeChars).to.equal(23);
    expect(results.totalNumberOfInMemoryChars).to.equal(11);
    expect(results.totalNumberOfCharsInEncodedForm).to.equal(42);
  });

  it("can count characters of a complex string (from input)", () => {
    var results = charCounter.count(singleString('"byc\\x9dyxuafof\\\\\\xa6uf\\\\axfozomj\\\\olh\\x6a"'));
    expect(results.totalNumberOfCodeChars).to.equal(43);
    expect(results.totalNumberOfInMemoryChars).to.equal(29);
  });
});

describe("--- Day 8: (2/2) counting chars of encoded strings --- ", () => {
  it("can count characters of an encoded empty string", () => {
    expect(charCounter.count(singleString('""')).totalNumberOfCharsInEncodedForm).to.equal(6);
  });

  it("can count characters of an encoded string", () => {
    expect(charCounter.count(singleString('"abc"')).totalNumberOfCharsInEncodedForm).to.equal(9);
  });

  it("can count characters of an encoded string with escaped quote", () => {
    expect(charCounter.count(singleString('"aaa\\"aaa"')).totalNumberOfCharsInEncodedForm).to.equal(16);
  });

  it("can count characters of an encoded string with hex-encoded char", () => {
    expect(charCounter.count(singleString('"\\x27"')).totalNumberOfCharsInEncodedForm).to.equal(11);
  });
});

var singleString = (s) => [s];
