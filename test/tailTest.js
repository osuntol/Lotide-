const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);

console.log(assertEqual(result.length, 2));