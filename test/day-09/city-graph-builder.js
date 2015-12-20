var expect = require("chai").expect;
var fromStrings = require("../../src/day-09/segments").fromStrings;
var cityGraphBuilder = require("../../src/day-09/city-graph-builder");
var json = require("graphlib").json;

describe("City Graph Builder", () => {
  it("can build nodes of a 2-cities graph", () => {
    var graph = cityGraphBuilder.build(segments("London to Dublin = 464"));
    expect(graph.nodes()).to.have.length(2).and.include("London").and.include("Dublin");
  });

  it("can build edges of a 2-cities graph", () => {
    var graph = cityGraphBuilder.build(segments("London to Dublin = 464"));
    expect(graph.edges()).to.have.length(1);
    expect(graph.edge("London", "Dublin")).to.equal(464);
    expect(graph.edge("Dublin", "London")).to.equal(464);
  });
});

var segments = (...strings) => fromStrings(strings);
