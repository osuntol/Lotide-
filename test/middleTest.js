const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
console.log(assertArraysEqual(middle([3,33,4,5,6,6]), [4,5]));

describe("#middle", () => {
  it("returns [4,5] for [3,33,4,5,6,6]", () => {
    assert.deepEqual(middle([3,33,4,5,6,6]), [4,5]);
  });
});
