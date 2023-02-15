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


module.exports = middle;