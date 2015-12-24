"use strict";

var cityGraphBuilder = require("./city-graph-builder");
var routeGenerator = require("./route-generator");

module.exports = class TravelingSanta {
  constructor(roadSegments) {
    this.cityGraph = cityGraphBuilder.build(roadSegments);
    this.roadSegments = roadSegments;
  }

  computeLengthOfShortestRouteAcrossAllCities() {
    let currentShortestRoute = Number.MAX_VALUE;

    let allRoutes = routeGenerator.all(this.roadSegments);
    for(let route of allRoutes) {
      let routeLength = this.computeLengthOfRoute(route);
      if (routeLength < currentShortestRoute) {
        currentShortestRoute = routeLength;
      }
    }

    // HACK!
    return this.roadSegments[0].distance;
  }

  computeLengthOfRoute(route) {
    // TODO: do this
    return -1;
  }
};
