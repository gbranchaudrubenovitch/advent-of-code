"use strict";

const A = "a".charCodeAt(0);
const Z = "z".charCodeAt(0);

exports.nextPasswordAfter = (currentPassword) => {
  let newPassword = currentPassword;

  for(let indexToIncrease = newPassword.length - 1; indexToIncrease >= 0; indexToIncrease--) {
    let charCodeToIncrease = newPassword.charCodeAt(indexToIncrease);
    
    let rollOver = charCodeToIncrease === Z;
    if (rollOver) {
      charCodeToIncrease = A;
    } else {
      charCodeToIncrease++;
    }

    let newChar = String.fromCharCode(charCodeToIncrease);
    newPassword = newPassword.slice(0, indexToIncrease) + newChar + newPassword.slice(indexToIncrease + 1);

    if (!rollOver) {
      break;
    }
  }
  return newPassword;
};
