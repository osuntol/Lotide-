const letterPositions = function(sentence) {
  var results = {};
  for (let i = 0; i <= sentence.length - 1; i++) {
    if (sentence[i] === ' ') {
      continue
    } if (results.hasOwnProperty(sentence[i])) {
      results[sentence[i]].push(i);
      continue;
    }
    results[sentence[i]] = new Array();
    results[sentence[i]].push(i);
  }
  return results;
}

console.log(letterPositions("lighthouse in the house"))