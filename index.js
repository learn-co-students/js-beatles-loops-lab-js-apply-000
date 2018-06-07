function theBeatlesPlay(musicians, instruments) {
  let phrases = []
  for (i = 0; i < musicians.length; i++ ) {
    phrases.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return phrases
}

function johnLennonFacts(factsArray) {
    for (i = 0; i < factsArray.length; i++) {
      factsArray[i] += '!!!'
    }
    return factsArray
  }

function iLoveTheBeatles(n) {
  let array = []
  do {
    array.push('I love the Beatles!');
    n += 1
  } while (n < 15);
  return array
}
