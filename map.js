const words = ['ground', 'control', 'to', 'major', 'tom']

const map = (arr, callback) => {
  let emptyArray = []
  for (const item of arr) {
    emptyArray.push(callback(item))
  }
  return emptyArray
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word =>  word[1]);


console.log(results3);


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

assertArrayEqual(results1,[ 'g', 'c', 't', 'm', 't' ])
assertArrayEqual(results2,[ 6, 7, 2, 5, 3 ])
assertArrayEqual(results3,[ 'r', 'o', 'o', 'a', 'o' ])
