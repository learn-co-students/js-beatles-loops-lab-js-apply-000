function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(facts) {
  var excitingFacts = []
  var i = 0
  while (i < facts.length) {
    excitingFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitingFacts
}

function iLoveTheBeatles(n) {
  var fanService = []
  do {fanService.push('I love the Beatles!');
  n++
  } while (n < 15)     
  return fanService
}
