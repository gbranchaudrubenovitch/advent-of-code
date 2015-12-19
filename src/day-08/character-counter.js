"use strict";

exports.count = function count(strings) {
  let totalNumberOfCodeChars = strings.reduce((currentTotal, currentString) => currentTotal + countCodeCharacters(currentString), 0);
  let totalNumberOfInMemoryChars = strings.reduce((currentTotal, currentString) => currentTotal + countInMemoryCharacters(currentString), 0);
  return {
    totalNumberOfCodeChars: totalNumberOfCodeChars,
    totalNumberOfInMemoryChars: totalNumberOfInMemoryChars
  };
};

var countCodeCharacters = (stringToCount) => {
  return stringToCount.length;
};

var countInMemoryCharacters = (stringToCount) => {
  let numberOfInMemoryCharacters = 0;
  let chars = stringToCount.split("");

  for (let i = 0; i < chars.length; i++) {
    let currentChar = chars[i];
    if (currentChar === '"') {
      continue;
    }

    if (currentChar === '\\') {
      let nextChar = chars[i + 1];
      if (nextChar === '"' || nextChar === "\\") {
        numberOfInMemoryCharacters++;
        i++; // skip next char (\" | \\)
      }
      if (nextChar === "x") {
        numberOfInMemoryCharacters++;
        i = i + 3; // skip next 3 chars (\x29)
      }
      continue;
    }
    numberOfInMemoryCharacters++;
  }
  return numberOfInMemoryCharacters;
};
