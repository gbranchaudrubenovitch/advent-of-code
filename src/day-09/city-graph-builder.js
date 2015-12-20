"use strict";

var Graph = require("graphlib").Graph;

exports.build = (roadSegments) => {
  let graph = new Graph({
    directed: false
  });
  roadSegments.forEach(s => {
    graph.setNode(s.from);
    graph.setNode(s.to);
    graph.setEdge(s.from, s.to, s.distance);
  });
  return graph;
};
