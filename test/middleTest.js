const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');
console.log(assertArraysEqual(middle([3,33,4,5,6,6]), [4,5]));