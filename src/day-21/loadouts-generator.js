"use strict";

// weapons: 5 choose 1 = 5
// armor: 5 choose 0 + 5 choose 1 = 1 + 5 = 6
// rings: 5 choose 0 + 5 choose 1 + 5 choose 2 = 1 + 5 + 10 = 16
// total loadouts = weapons * armor * rings =  5 * 6 * 16 = 480

let newLoadout = () => {
  return {
    cost: 0,
    damage: 0,
    armor: 0
  };
};

let newLoadoutFrom = (loadout) => {
  return {
    cost: loadout.cost,
    damage: loadout.damage,
    armor: loadout.armor
  };
};

exports.generateFrom = (store) => {
  let loadouts = [];
  for (let weapon of store.weapons) {
    let justTheWeapon = newLoadout();
    justTheWeapon.cost += weapon.cost;
    justTheWeapon.damage += weapon.damage;
    loadouts.push(justTheWeapon);

    for (let armor of store.armors) {
      let weaponAndArmor = newLoadoutFrom(justTheWeapon);
      weaponAndArmor.cost += armor.cost;
      weaponAndArmor.armor += armor.armor;
      loadouts.push(weaponAndArmor);

      // TODO: handle the rings
    }
  }
  return loadouts;
};

exports.generateFromDefaultStore = () => {
  let defaultStore = {};
  return exports.generateLoadoutsFrom(defaultStore);
};
