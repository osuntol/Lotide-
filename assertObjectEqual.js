const assertObjectEquals = function (actual, expected){
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🤩Assertion Passed: ${inspect(actual)}   ===  ${inspect(expected)}`);
  } else {
    console.log(`😱Assertion Failed  $${inspect(actual)}!==  ${inspect(expected)}`);
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



obj1 = {'a': 1, 'b': 2}
obj2 = {'a': 1, 'b': 2}


console.log(assertObjectEquals(obj1,obj2));