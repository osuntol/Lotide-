const flatten = function(arr) {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
       newArray.push(arr[i])
    } else {
      for (let j= 0; j < arr[i].length; j++){
        newArray.push(arr[i][j])
      }
    }
  }
  return newArray;
}


// console.log(flatten([1, 2, [3, 4], 5, [6]]))