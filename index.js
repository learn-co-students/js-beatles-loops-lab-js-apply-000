function theBeatlesPlay(musicians, instruments) {
  var music = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    music.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return music
}

function johnLennonFacts(facts) {
  var truth = []

  var i = 0
  while (i < facts.length) {
    truth.push(`${facts[i]}!!!`)
    i++
  }

  return truth
}

function iLoveTheBeatles(n) {
  var repeat = []

  do {
    repeat.push('I love the Beatles!')
    n++
  } while (n < 15)

  return repeat
}
