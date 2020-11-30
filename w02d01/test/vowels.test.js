const chai = require('chai');
const assert = chai.assert;

// const { assert } = require('chai');

const numberOfVowels = require('../vowels');

describe('tests for numberOfVowels', () => {

  it('should return 3 given "orange"', () => {
    const actual = numberOfVowels('orange');
    const expected = 3;

    assert.isNumber(actual);
    assert.strictEqual(actual, expected);
  });

  it('should return 5 given "lighthouse labs"', () => {
    const actual = numberOfVowels('lighthouse labs');
    const expected = 5;
    
    assert.isNumber(actual);
    assert.strictEqual(actual, expected);
  });

  it('should return 5 given "aeiou"', () => {
    const actual = numberOfVowels('aeiou');
    const expected = 5;
    
    assert.isNumber(actual);
    assert.strictEqual(actual, expected);
  });

  it('should return null if not given a string', () => {
    const actual = numberOfVowels();
    const expected = null;
    
    assert.isNull(actual);
    assert.strictEqual(actual, expected);
  });

});
