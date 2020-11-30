const assert = require('assert').strict;
const helpers = require('./sayhello');

const actual = helpers.sayHello('Alice');

const expected = 'hello Alice';

assert.strictEqual(actual, expected);
