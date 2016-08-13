function theBeatlesPlay(musicians,instruments) {
  var x = []
  for (var i=0; i < musicians.length; i++) {
    x[i] = musicians[i] + " plays " + instruments[i]
  }
  return x
}

function johnLennonFacts(facts) {
  var i = 0
  var text = []

  while (facts[i]) {
    text[i] = facts[i] + "!!!"
    i++
  }
  return text
}

function iLoveTheBeatles(numParm) {
  var i = 0
  var text = []

  do {
    text[i] = "I love the Beatles!"
    numParm++
    i++
  } while (numParm < 15)
  return text
}
