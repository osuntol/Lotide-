const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 3, 5], [1, 2, 4]), false);