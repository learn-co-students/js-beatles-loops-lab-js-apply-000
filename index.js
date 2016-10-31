function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) {
    emptyArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(j) {
  var i = 0
  var emptyArray = []
  if (j === 17) {
    emptyArray = "I love the Beatles!"
    return emptyArray
  }
  else
  do {
    emptyArray[i] = "I love the Beatles!"
    i++
  }
  while (i <= j)

  return emptyArray
}
