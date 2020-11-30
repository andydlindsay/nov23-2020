const assert = require('assert').strict;
const helpers = require('../sayhello');

// describe(); // wrappers, give context to our tests

// it(); // is the actual test

describe('tests for the sayHello function', () => {

  it('should return "hello Alice" when given the string "Alice"', () => {
    const actual = helpers.sayHello('Alice');
    const expected = 'hello Alice';
    assert.strictEqual(actual, expected);

    assert.strictEqual(helpers.sayHello('Alice'), 'hello Alice');
  });

});
