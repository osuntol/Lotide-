function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤩Assertion Passed: ${actual}   ===  ${expected}`);
  } else {
    console.log(`😱Assertion Failed  ${actual} !==  ${expected}`);
  }
}

function tail(result) {
  let sliced = result.slice(1);
  return sliced;
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);

console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));