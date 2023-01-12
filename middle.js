//ASSERT ARRAY EQUAL
function eqArrays(array1, array2) {
  if (array1.length !== array2.length){
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

//EQ ARRAYS
function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤩Assertion Passed: ${actual}   ===  ${expected}`);
  } else {
    console.log(`😱Assertion Failed  ${actual} !==  ${expected}`);
  }
}

function eqArrays(array1, array2) {
  if (array1.length !== array2.length){
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    } 
  }
 return true;
}

function middle (array) {
  if (array.length <= 2){
    return []
  } if (array.length % 2 === 0 ){
     const middleIndex1 = (array.length)/2
     const middleIndex2 = (array.length)/2 - 1
     return [array[middleIndex2], array[middleIndex1]]
    }
  if (array.length % 2 === 1){
    const middleIndex3 = Math.floor(array.length/2)
    return [array[middleIndex3]]
  }
}

console.log(middle([]))