var expect = require("chai").expect;
var loadoutsGenerator = require("../../src/day-21/loadouts-generator");

describe("Loadouts generator", () => {
  it("generates a single loadout", () => {
    var theStore = store([item("Dagger", 8, 4, 0)], [], []);
    var loadouts = loadoutsGenerator.generateFrom(theStore);

    expect(loadouts).to.have.length(1);
    expect(loadouts[0].cost).to.equal(8);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(0);
  });

  it("generates 2 loadouts (1 weapon, 1 armor)", () => {
    var theStore = store([item("Dagger", 8, 4, 0)], [item("Leather", 13, 0, 1)], []);
    var loadouts = loadoutsGenerator.generateFrom(theStore).sort(cheapestLoadoutsFirst);

    expect(loadouts).to.have.length(2);
    expect(loadouts[0].cost).to.equal(8);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(0);
    expect(loadouts[1].cost).to.equal(21);
    expect(loadouts[1].damage).to.equal(4);
    expect(loadouts[1].armor).to.equal(1);
  });

  it("generates 4 loadouts (2 weapons, 1 armor)", () => {
    var theStore = store([item("Dagger", 8, 4, 0), item("Shortsword", 10, 5, 0)], [item("Leather", 13, 0, 1)], []);
    var loadouts = loadoutsGenerator.generateFrom(theStore).sort(cheapestLoadoutsFirst);

    expect(loadouts).to.have.length(4);
    expect(loadouts[0].cost).to.equal(8);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(0);

    expect(loadouts[1].cost).to.equal(10);
    expect(loadouts[1].damage).to.equal(5);
    expect(loadouts[1].armor).to.equal(0);

    expect(loadouts[2].cost).to.equal(21);
    expect(loadouts[2].damage).to.equal(4);
    expect(loadouts[2].armor).to.equal(1);

    expect(loadouts[3].cost).to.equal(23);
    expect(loadouts[3].damage).to.equal(5);
    expect(loadouts[3].armor).to.equal(1);
  });

  it("can generate 4 loadouts (1 weapon, 2 rings)", () => {
    var theStore = store([item("Dagger", 8, 4, 0)], [], [item("Damage +1", 25, 1, 0), item("Damage +3", 100, 3, 0)]);
    var loadouts = loadoutsGenerator.generateFrom(theStore).sort(cheapestLoadoutsFirst);

    expect(loadouts).to.have.length(4);
    expect(loadouts[0].cost).to.equal(8);
    expect(loadouts[0].damage).to.equal(4);
    expect(loadouts[0].armor).to.equal(0);

    expect(loadouts[1].cost).to.equal(33);
    expect(loadouts[1].damage).to.equal(5);
    expect(loadouts[1].armor).to.equal(0);

    expect(loadouts[2].cost).to.equal(108);
    expect(loadouts[2].damage).to.equal(7);
    expect(loadouts[2].armor).to.equal(0);

    expect(loadouts[3].cost).to.equal(133);
    expect(loadouts[3].damage).to.equal(8);
    expect(loadouts[3].armor).to.equal(0);
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

var cheapestLoadoutsFirst = (l, r) => l.cost == r.cost ? 0 : l.cost < r.cost ? -1 : 1;
