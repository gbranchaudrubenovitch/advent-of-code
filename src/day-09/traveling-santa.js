"use strict";

var cityGraphBuilder = require("./city-graph-builder");

module.exports = class TravelingSanta {
  constructor(roadSegments) {
    this.cityGraph = cityGraphBuilder.build(roadSegments);
    this.depth = this.cityGraph.nodes().length;
    this.allRoutes = this.generateAllRoutes();
  }

  computeLengthOfShortestRouteAcrossAllCities() {
    return this.computeLengthOfRouteAcrossAllCities(Number.MAX_VALUE, Math.min);
  }

  computeLengthOfLongestRouteAcrossAllCities() {
    return this.computeLengthOfRouteAcrossAllCities(Number.MIN_VALUE, Math.max);
  }

  computeLengthOfRouteAcrossAllCities(initialValue, comparator) {
    let lengthToKeep = initialValue;

    for (let route of this.allRoutes) {
      let routeLength = this.computeLengthOfRoute(route);
      lengthToKeep = comparator(routeLength, lengthToKeep);
    }
    return lengthToKeep;
  }

  generateAllRoutes() {
    let allRoutes = [];
    let cities = this.cityGraph.nodes();
    for (let startingCity of cities) {
      let routes = this.generateRoutes(startingCity, [startingCity]);
      allRoutes = allRoutes.concat(routes);
    }
    return allRoutes;
  }

  generateRoutes(startingCity, alreadyVisitedCities) {
    if (alreadyVisitedCities.length === this.depth) {
      return [alreadyVisitedCities];
    }

    let routes = [];
    let neighbors = this.cityGraph.neighbors(startingCity);
    for (let neighbor of neighbors) {
      if (alreadyVisitedCities.includes(neighbor)) {
        continue;
      }
      routes = routes.concat(this.generateRoutes(neighbor, alreadyVisitedCities.concat(neighbor)));
    }
    return routes;
  }

  computeLengthOfRoute(route) {
    var length = 0;
    for (var i = 0; i < route.length - 1; i++) {
      var fromCity = route[i];
      var toCity = route[i + 1];
      length += this.cityGraph.edge(fromCity, toCity);
    }
    return length;
  }
};
