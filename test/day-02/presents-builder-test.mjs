import chai from "chai";
import * as presents from "../../src/day-02/presents-builder";

const expect = chai.expect;

describe("Presents builder", function () {
  it("can parse a stringified present into object", () => {
    expect(presents.fromLines(["1x1x10"])[0]).to.deep.equal({length: 1, width: 1, height: 10});
  });

  it("can parse 2 stringified presents into objects", () => {
    var parsedPresents = presents.fromLines(["1x1x10", "2x3x4"]);
    expect(parsedPresents).to.have.length(2);
  });
});
