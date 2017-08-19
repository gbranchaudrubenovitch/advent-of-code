"use strict";

// weapons: 5 choose 1 = 5
// armor: 5 choose 0 + 5 choose 1 = 1 + 5 = 6
// rings: 5 choose 0 + 5 choose 1 + 5 choose 2 = 1 + 5 + 10 = 16
// total loadouts = weapons * armor * rings =  5 * 6 * 16 = 480

let newLoadout = () => {
  return {
    cost: 0,
    damage: 0,
    armor: 0,
    ringsUsed: []
  };
};

let newLoadoutFrom = (loadout) => {
  return {
    cost: loadout.cost,
    damage: loadout.damage,
    armor: loadout.armor,
    ringsUsed: loadout.ringsUsed
  };
};

let ringsAreAlreadyUsedInPreviousLoadout = (firstRing, secondRing, previousLoadouts) => {
  for (let previousLoadout of previousLoadouts) {
    if (previousLoadout.ringsUsed.includes(firstRing) && previousLoadout.ringsUsed.includes(secondRing)) {
      return true;
    }
  }
  return false;
};

let armorIsAlreadyUsedInLoadouts = (armor, previousLoadouts) => {
  for (let previousLoadout of previousLoadouts) {
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
      singleRingLoadout.ringsUsed.push(firstRing);
      loadouts.push(singleRingLoadout);

      for (let secondRing of store.rings) {
        if (ringsAreAlreadyUsedInPreviousLoadout(firstRing, secondRing, loadouts)) {
          continue;
        }
        let twoRings = newLoadoutFrom(singleRingLoadout);
        twoRings.cost += secondRing.cost;
        twoRings.damage += secondRing.damage;
        twoRings.armor += secondRing.armor;
        twoRings.ringsUsed.push(secondRing);
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
