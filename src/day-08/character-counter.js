"use strict";

exports.count = function count(strings) {
  let totalNumberOfCodeChars = strings.reduce((currentTotal, currentString) => currentTotal + countCodeCharacters(currentString), 0);
  let totalNumberOfInMemoryChars = strings.reduce((currentTotal, currentString) => currentTotal + countInMemoryCharacters(currentString), 0);
  let totalNumberOfCharsInEncodedForm = strings.reduce((currentTotal, currentString) => currentTotal + countCharactersInEncodedForm(currentString), 0);

  return {
    totalNumberOfCodeChars: totalNumberOfCodeChars,
    totalNumberOfInMemoryChars: totalNumberOfInMemoryChars,
    totalNumberOfCharsInEncodedForm: totalNumberOfCharsInEncodedForm
  };
};

var countCodeCharacters = (stringToCount) => {
  return stringToCount.length;
};

var countInMemoryCharacters = (stringToCount) => {
  let doubleQuotes = /"/g;
  let escapeSequences = /\\\\|\\"|\\x../g;
  let withNothing = "";
  let withAnyOneChar = "R";
  return stringToCount.replace(doubleQuotes, withNothing).replace(escapeSequences, withAnyOneChar).length;
};

var countCharactersInEncodedForm = (rawStringToCount) => {
  let encodedString = ('"' + rawStringToCount.replace(/"|\\/g, 'RR') + '"');
  return encodedString.length;
};
