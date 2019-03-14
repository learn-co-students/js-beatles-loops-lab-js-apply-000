function theBeatlesPlay(musicians, instruments) {
  var theBand = []
  for ( var i = 0; i < musicians.length; i++ ) {
    theBand.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBand
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var declaration = []
  do {
    declaration.push("I love the Beatles!")
    n--
  } while (n >= 0 && n < 15)
  return declaration
}