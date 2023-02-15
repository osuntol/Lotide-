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

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤩Assertion Passed: ${actual}   ===  ${expected}`);
  } else {
    console.log(`😱Assertion Failed  ${actual} !==  ${expected}`);
  }
}


const eqObjects = function(object1, object2) {
  const keyObject1 = Object.keys(object1);
  const keyObject2 = Object.keys(object2);
  if (keyObject1.length !== keyObject2.length) {
    return false
  } 
  
  for (let key of keyObject1) {
    const value1 = object1[key];
    const value2 = object2[key];
    const isArray = Array.isArray(value1);
    const isIdentical = Object.is(value1,value2) || eqArrays(value1, value2); 

    if (!isArray && !isIdentical) {
      return false
    }
  }
  return true
}

module.exports = eqObjects;
