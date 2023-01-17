function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤩Assertion Passed: ${actual}   ===  ${expected}`);
  } else {
    console.log(`😱Assertion Failed  ${actual} !==  ${expected}`);
  }
}


function findKey(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  } 
  return undefined;
}
 

let results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2,},
  "Akelarre":  { stars: 3 }
}, function (x){
  return x.stars === 2;
}
)

console.log(assertEqual((results), 'Ora'))