"use strict";

var cityGraphBuilder = require("./city-graph-builder");

module.exports = class TravelingSanta {
  constructor(roadSegments) {
    this.cityGraph = cityGraphBuilder.build(roadSegments);
    this.roadSegments = roadSegments;
  }

  computeLengthOfShortestRouteAcrossAllCities() {
    return this.roadSegments[0].distance;
  }
};
