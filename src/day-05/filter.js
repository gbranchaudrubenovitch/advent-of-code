"use strict";

exports.countNiceStrings = function countNiceStrings(strings) {
  return strings.filter(exports.isNice).length;
};

exports.countNiceStringsWithNewRules = function countNiceStringsWithNewRules(strings) {
  return strings.filter(exports.isNiceForReal).length;
};

exports.isNice = function isNice(candidate) {
  if (!containsAtLeast3Vowels(candidate)) {
    return false;
  }
  if (!containsAtLeastOneLetterThatAppearsTwiceInARow(candidate)) {
    return false;
  }
  if (!containsNoneOfTheForbiddenStrings(candidate)) {
    return false;
  }
  return true;
};

exports.isNiceForReal = function isNiceForReal(candidate) {
  if (!containsRepeatingPairWithoutOverlap(candidate)) {
    return false;
  }
  if (!containsAtLeastOneLetterWhichRepeatsWithExactlyOneLetterInBetween(candidate)) {
    return false;
  }
  return true;
};

var containsRepeatingPairWithoutOverlap = (candidate) => {
  var letters = candidate.split("");
  for (let i = 0; i < letters.length; i++) {
    let remainingChars = letters.length - (i + 1);
    let aNewPairCouldBeFoundAndRepeatedInRemainingChars = remainingChars >= 3;
    if (!aNewPairCouldBeFoundAndRepeatedInRemainingChars) {
      return false;
    }

    let currentPair = letters[i] + letters[i + 1];
    let thisPairRepeatsLater = candidate.indexOf(currentPair, i + 2) > -1;
    if (thisPairRepeatsLater) {
      return true;
    }
  }
  return false;
};

var containsAtLeastOneLetterWhichRepeatsWithExactlyOneLetterInBetween = (candidate) => {
  var letters = candidate.split("");
  for (let i = 0; i < letters.length; i++) {
    let remainingChars = letters.length - (i + 1);
    let canStillFindMatch = remainingChars >= 2;
    if (!canStillFindMatch) {
      return false;
    }

    let thisLetterRepeatsAfterNextLetter = letters[i] === letters[i + 2];
    if (thisLetterRepeatsAfterNextLetter) {
      return true;
    }
  }
  return false;
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

var containsAtLeastOneLetterThatAppearsTwiceInARow = (candidate) => {
  var letters = candidate.split("");
  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    let appearsBefore = i > 0 ? letters[i - 1] === currentLetter : false;
    let appearsAfter = i < letters.length ? letters[i + 1] === currentLetter : false;
    if (appearsBefore || appearsAfter) {
      return true;
    }
  }
  return false;
};

var containsNoneOfTheForbiddenStrings = (candidate) => {
  return !candidate.includes("ab") && !candidate.includes("cd") && !candidate.includes("pq") && !candidate.includes("xy");
};
