function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤩Assertion Passed: ${actual}   ===  ${expected}`);
  } else {
    console.log(`😱Assertion Failed  ${actual} !==  ${expected}`);
  }
}


let stringUse = "lighthouse in the house"
function countLetters(string) {
  stringCount = {}
  for (let i = 0; i <= string.length - 1; i++) {
    let character = string[i];
    
    if (character === ' '){
      continue
  }
    let regEx = new RegExp( character, "g")
    
    let foundLetters = string.match(regEx)
    
    stringCount[character] = foundLetters.length 
} 
  return stringCount
}

console.log(countLetters(stringUse))


