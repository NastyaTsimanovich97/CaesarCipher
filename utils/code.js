const { map, split, findIndex, join, size } = require('lodash');
const lowerCaseAlphabet = require('./lowerCaseAlphabet');
const upperCaseAlphabet = require('./upperCaseAlphabet');


exports.code = (data, type, shift) => {
  let shiftNumber = Number(shift);
  const dataArray = split(data, '');

  if (shiftNumber > size(lowerCaseAlphabet)) {
    shiftNumber = shiftNumber % size(lowerCaseAlphabet);
  }

  const result = map(dataArray, (item) => {
    let alphabet = upperCaseAlphabet;
    const isLowerCaseItem = item.toLowerCase() === item;

    if (isLowerCaseItem) {
      alphabet = lowerCaseAlphabet;
    }

    const alphabetIndex = findIndex(alphabet, alphabetItem => alphabetItem === item);

    if (alphabetIndex === -1) {
      //Item doesnt exist in alphabet
      return item;
    } else {
      let nextItemIndex = alphabetIndex + shiftNumber;
      let nextOverAlphabetIndex = nextItemIndex - 26;
      if (type === 'decode') {
        nextItemIndex = alphabetIndex - shiftNumber;
        nextOverAlphabetIndex = nextItemIndex + 26;
      }

      // Alphabet Index Is In Alphabet Range
      if (alphabet[nextItemIndex]) {
        // Append To String
        return alphabet[nextItemIndex];
      }
      // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
      else {
        // Append To String
        return alphabet[nextOverAlphabetIndex];
      }
    }
  });
  return join(result, '');
};
