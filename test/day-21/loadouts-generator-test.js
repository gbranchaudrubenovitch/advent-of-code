var expect = require("chai").expect;
var loadoutsGenerator = require("../../src/day-21/loadouts-generator");

describe("Loadouts generator", () => {
  it("can generate a single loadout", () => {
    var theStore = store([item("Dagger", 8, 4, 0)], [item("Leather", 13, 0, 1)], []);
    var loadouts = loadoutsGenerator.generateFrom(theStore);

    expect(loadouts).to.have.length(1);
    expect(loadouts[0].cost).to.equal(21);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(1);
  });

  it("can generate 2 loadouts (no rings)", () => {
    var theStore = store([item("Dagger", 8, 4, 0), item("Shortsword", 10, 5, 0)], [item("Leather", 13, 0, 1)], []);
    var loadouts = loadoutsGenerator.generateFrom(theStore);

    expect(loadouts).to.have.length(2);
    expect(loadouts[0].cost).to.equal(21);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(1);
    expect(loadouts[1].cost).to.equal(23);
    expect(loadouts[1].damage).to.equal(5);
    expect(loadouts[1].armor).to.equal(1);
  });

  it("can generate 2 loadouts (one ring)", () => {
    var theStore = store([item("Dagger", 8, 4, 0)], [item("Leather", 13, 0, 1)], [item("Damage +1", 25, 1, 0)]);
    var loadouts = loadoutsGenerator.generateFrom(theStore);

    expect(loadouts).to.have.length(2);
    expect(loadouts[0].cost).to.equal(21);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(1);
    expect(loadouts[1].cost).to.equal(46);
    expect(loadouts[1].damage).to.equal(5);
    expect(loadouts[1].armor).to.equal(1);
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
