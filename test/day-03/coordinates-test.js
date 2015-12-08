var expect = require("chai").expect;
var coordinates = require("../../src/day-03/coordinates");

describe("Coordinates builder", () => {
  it("sets origin to (0,0)", () => {
    expect(coordinates.atOrigin()).to.deep.equal(coordAt(0, 0));
  });

  it("prints a nice string output", () => {
    expect(coordinates.stringOf(coordAt(-4, 5))).to.equal("(-4,5)");
  });

  it("moves up when going north", () => {
    var currentCoords = coordinates.atOrigin();
    expect(coordinates.applyMove(currentCoords, "^")).to.deep.equal(coordAt(0, 1));
  });

  it("moves down when going south", () => {
    var currentCoords = coordinates.atOrigin();
    expect(coordinates.applyMove(currentCoords, "v")).to.deep.equal(coordAt(0, -1));
  });

  it("moves right when going east", () => {
    var currentCoords = coordinates.atOrigin();
    expect(coordinates.applyMove(currentCoords, ">")).to.deep.equal(coordAt(1, 0));
  });

  it("moves left when going west", () => {
    var currentCoords = coordinates.atOrigin();
    expect(coordinates.applyMove(currentCoords, "<")).to.deep.equal(coordAt(-1, 0));
  });
});

var coordAt = (xVal, yVal) => {
  return {
    x: xVal,
    y: yVal
  };
};
