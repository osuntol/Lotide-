const assertEqual = require('./assertEqual')

function head (array) {
  var first = array[0]
  return first
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

