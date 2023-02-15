const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
const assert = require('chai').assert;

console.log(assertEqual(result.length, 2));

describe("#tail", () => {
  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
});
