function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++ ) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray

}

function johnLennonFacts(facts) {
  var coolfacts = []
  var i = 0
  while (i < facts.length) {
    coolfacts.push(`${facts[i]}!!!`)
    i++;
  }
  return coolfacts
}

function iLoveTheBeatles(love) {
  var lovebeatles = []
  do {
    lovebeatles.push('I love the Beatles!')
    love++
  } while (love <15)

  return lovebeatles
}
