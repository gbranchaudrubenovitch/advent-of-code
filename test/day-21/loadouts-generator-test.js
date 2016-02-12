var expect = require("chai").expect;
var loadoutsGenerator = require("../../src/day-21/loadouts-generator");

describe("Loadouts generator", () => {
  it.skip("(WIP) can generate a single loadout", () => {
    var storeWith1Weapon = store([item("Dagger", 8, 4, 0)], [], []);
    var loadouts = loadoutsGenerator.generateFrom(storeWith1Weapon);

    expect(loadouts).to.have.length(1);
    expect(loadouts[0].cost).to.equal(8);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(0);
  });
});

var item = (name, cost, damage, armor) => {
  return {
    name: name,
    cost: cost,
    damage: damage,
    armor: armor
  };
};

var store = (weapons, armors, rings) => {
  return {
    weapons: weapons,
    armors: armors,
    rings: rings
  };
};
