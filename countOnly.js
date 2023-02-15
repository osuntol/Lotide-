function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤩Assertion Passed: ${actual}   ===  ${expected}`);
  } else {
    console.log(`😱Assertion Failed  ${actual} !==  ${expected}`);
  }
}

// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 11);


function countOnly(allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    console.log(item)
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1
      } else {
        results[item] = 1
      }
    }
  } 
  console.log(results)
  return results;
}
const firstNames = [
  "Karl",
  "Salima",
  'Agouhanna',
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",

];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;