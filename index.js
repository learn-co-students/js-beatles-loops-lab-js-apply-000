var theBeatlesPlay = function(musicians, instruments) {
    const theBeatles = []

    for (var i = 0; i < 4; i++) {
      theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return theBeatles
}

var johnLennonFacts = function(factsArray) {
  const facts = []
  var i = 0

  while (factsArray.length > i) {
    facts.push(`${factsArray[i]}!!!`)
    i++
  }
  return facts
}

var iLoveTheBeatles = function(n) {
  var loveBeatles = []

  do {
    loveBeatles.push(`I love the Beatles!`)
    n++
  } while (n < 15)
  return loveBeatles
}
