function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

function assertArrayEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🤩Assertion Passed: ${array1}   ===  ${array2}`);
  } else {
    console.log(`😱Assertion Failed  ${array1} !==  ${array2}`);
  }
}

findElementInArray = (itemsToRemove, element) => {
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (itemsToRemove[i] === element) {
      return true
    }
  }
  return false
}

const words = ["hello", "world", "lighthouse"];
without = (source, itemsToRemove) => {
  if (itemsToRemove.length === 0) {
    return source
  }
  let result = []
  for (element of source) { // for each element in arr1
    let found = false;
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (itemsToRemove[i] === element) {
        found = true
        break
      }
    }
    if (found === false) {
      result.push(element)
    }

  }
  return result
}

console.log((without([1, 2, 3], [1])))  // [2,3]
console.log(without([1, 2, 3], [2])) // [1,3])
console.log(without([1, 2, 3], [3, 2])) // [1]
console.log(without([1, 2, 3], [])) // [1,2,3]
console.log(without([99, 51, 7878], [6, 12, 56, 89, 99])) // [ 51, 7878]
console.log(without([], [6, 12, 56, 89])) // []
console.log(without(words, ["lighthouse"]))

console.log(assertArrayEqual(without(words, ['hello', 'world']
), ['lighthouse']
))
console.log(assertArrayEqual(without([1, 2, 3], [1]), [2, 3]))