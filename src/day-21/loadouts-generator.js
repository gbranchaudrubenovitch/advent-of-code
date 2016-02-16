"use strict";

// weapons: 5 choose 1 = 5
// armor: 5 choose 1 = 5
// rings: 5 choose 0 + 5 choose 1 + 5 choose 2 = 1 + 5 + 10 = 16
// total loadouts = weapons * armor * rings =  5 * 5 * 16 = 400

let newLoadout = () => {
  return {
    cost: 0,
    damage: 0,
    armor: 0
  };
};

exports.generateFrom = (store) => {
  let loadouts = [];
  for (let weapon of store.weapons) {
    for (let armor of store.armors) {
      let currentLoadout = newLoadout();

      currentLoadout.cost += weapon.cost + armor.cost;
      currentLoadout.damage += weapon.damage;
      currentLoadout.armor += armor.armor;

      loadouts.push(currentLoadout);
    }

  }

  return loadouts;
};

exports.generateFromDefaultStore = () => {
  let defaultStore = {};
  return exports.generateLoadoutsFrom(defaultStore);
};
