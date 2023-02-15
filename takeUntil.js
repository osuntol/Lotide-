
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

const takeUntil = (array, callback) => {
  const newArray = [];
   for (const element of array) {
    if (callback(element)) {
      break
    }
    newArray.push(element)
  }
  return newArray
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log(assertArrayEqual(results1,[ 1, 2, 5, 7, 2 ] ))



module.exports = takeUntil;



