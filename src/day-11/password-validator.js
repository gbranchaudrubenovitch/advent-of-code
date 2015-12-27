"use strict";

exports.isValid = (candidatePassword) => {
  return !usesConfusingLetter(candidatePassword) &&
    hasIncreasingStraightOfAtLeast3Characters(candidatePassword) &&
    hasAtLeastTwoPairsOfCharacters(candidatePassword);
};

var usesConfusingLetter = (candidatePassword) => {
  return candidatePassword.includes("i") || candidatePassword.includes("o") || candidatePassword.includes("l");
};

var hasIncreasingStraightOfAtLeast3Characters = (candidatePassword) => {
  for(let i = 0; i < candidatePassword.length - 2; i++) {
    let currentCharCode = candidatePassword.charCodeAt(i);
    let nextCharCode = candidatePassword.charCodeAt(i + 1);
    let thirdCharCode = candidatePassword.charCodeAt(i + 2);

    if (currentCharCode === nextCharCode - 1 && nextCharCode === thirdCharCode - 1) {
      return true;
    }
  }
  return false;
};

var hasAtLeastTwoPairsOfCharacters = (candidatePassword) => {
  let onePairHasAlreadyBeenFound = false;

  let chars = candidatePassword.split("");
  for(let i = 0; i < chars.length - 1; i++) {
    let thisIsAPair = chars[i] === chars[i +1];
    if (thisIsAPair && onePairHasAlreadyBeenFound) {
        return true;
    } else if (thisIsAPair) {
        onePairHasAlreadyBeenFound = true;
        i++;
    }
  }
  return false;
};
