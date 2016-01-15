"use strict";

exports.from = (rawContainers) => {
  return rawContainers.map(c => parseInt(c, 10));
};
