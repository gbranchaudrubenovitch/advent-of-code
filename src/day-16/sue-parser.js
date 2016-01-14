"use strict";

let parse = (rawSue) => {
  let firstColonIndex = rawSue.indexOf(":");

  let number = parseInt(rawSue.substring(0, firstColonIndex).split(" ")[1], 10);
  let sue = {
    number: number
  };

  let compounds = rawSue.substring(firstColonIndex + 2).split(", ");
  for (let i = 0; i < compounds.length; i++) {
    let rawCompound = compounds[i].split(": ");
    let compoundName = rawCompound[0];
    let compoundValue = parseInt(rawCompound[1], 10);

    sue[compoundName] = compoundValue;
  }

  return sue;
};

exports.from = (rawSues) => {
  return rawSues.map(s => parse(s));
};
