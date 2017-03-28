function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  var strings = []
  var i = 0
  while (i < facts.length) {
    strings.push(`${facts[i]}!!!`)
    i++
  }
  return strings
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return love
}
