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

let ringsAreAlreadyUsedInPreviousLoadout = (firstRing, secondRing, previousLoadouts) => {
  // TODO: add a .ringsUsed array on the loadout so you can know which rings, if any, were used...
  return false;
};

let armorIsAlreadyUsedInLoadouts = (armor, previousLoadouts) => {
  for (let previousLoadout in previousLoadouts) {
    if (armor === previousLoadout.armor) {
      return true;
    }
  }
  return false;
};

let pickArmorFrom = (store, previousLoadouts) => {
  for (let armor of store.armors) {
    if (!armorIsAlreadyUsedInLoadouts(armor, previousLoadouts)) {
      return armor;
    }
  }
  return null;
};

exports.generateFrom = (store) => {
  let loadouts = [];
  for (let weapon of store.weapons) {
    let justTheWeapon = newLoadout();
    justTheWeapon.cost += weapon.cost;
    justTheWeapon.damage += weapon.damage;
    loadouts.push(justTheWeapon);

    let weaponAndArmor = newLoadoutFrom(justTheWeapon);
    let chosenArmor = pickArmorFrom(store, loadouts);
    if (chosenArmor) {
      weaponAndArmor.cost += chosenArmor.cost;
      weaponAndArmor.armor += chosenArmor.armor;
      loadouts.push(weaponAndArmor);
    }

    for (let firstRing of store.rings) {
      let singleRingLoadout = newLoadoutFrom(weaponAndArmor);
      singleRingLoadout.cost += firstRing.cost;
      singleRingLoadout.damage += firstRing.damage;
      singleRingLoadout.armor += firstRing.armor;
      loadouts.push(singleRingLoadout);

      for (let secondRing of store.rings) {
        if (secondRing === firstRing || ringsAreAlreadyUsedInPreviousLoadout(firstRing, secondRing, loadouts)) {
          continue;
        }
        let twoRings = newLoadoutFrom(singleRingLoadout);
        twoRings.cost += secondRing.cost;
        twoRings.damage += secondRing.damage;
        twoRings.armor += secondRing.armor;
        loadouts.push(twoRings);
      }
    }
  }
  return loadouts;
};

exports.generateFromDefaultStore = () => {
  let defaultStore = { weapons: [], armors: [], rings: []}; // TODO: create a filled default store!
  return exports.generateFrom(defaultStore);
};
