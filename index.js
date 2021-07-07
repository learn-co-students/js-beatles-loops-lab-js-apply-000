function theBeatlesPlay(musicians, instruments) {
  var roles = []
  for (var counter = 0; counter < musicians.length; counter++ ) {
    roles.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }
  return roles
}

function johnLennonFacts(facts) {
  var counter = 0
  while (counter < facts.length) {
    facts[counter] = `${facts[counter]}!!!`
    counter++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var admirations = []
  do {
    admirations.push('I love the Beatles!');
    num++
  } while (num < 15)
  return admirations
}