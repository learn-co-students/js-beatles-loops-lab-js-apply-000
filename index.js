function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const fact = []
  while (facts.length > 0) {
    fact.push(`${facts.shift()}!!!`)
  }
  return fact
}

function iLoveTheBeatles(number) {
  var lots = []
  do {
    lots.push("I love the Beatles!")
    number++
  } while (number < 15);
  return lots
}
