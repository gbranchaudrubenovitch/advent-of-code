"use strict";

exports.countNiceStrings = function countNiceStrings(strings) {
  return -1;
};

exports.isNice = function isNice(candidate) {
  if (!containsAtLeast3Vowels(candidate)) {
    return false;
  }
  if (!containsAtLeastOneLetterThatAppearsTwiceInARow(candidate)) {
    return false;
  }
  return true;
};

var containsAtLeast3Vowels = (candidate) => {
  var isVowel = (letter) => ["a", "e", "i", "o", "u"].includes(letter);
  var vowelsCount = 0;

  var letters = candidate.split("");
  for (var letter of letters) {
    if (isVowel(letter)) {
      vowelsCount++;
    }
  }
  return vowelsCount >= 3;
};

var containsAtLeastOneLetterThatAppearsTwiceInARow = (singleString) => {
  return true;
};
