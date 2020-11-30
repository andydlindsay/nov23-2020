const numberOfVowels = (input) => {
  if (!input) {
    return null;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let numVowels = 0;

  for (const char of input) {
    if (vowels.includes(char)) {
      numVowels++;
    }
  }

  return numVowels;
};

module.exports = numberOfVowels;
