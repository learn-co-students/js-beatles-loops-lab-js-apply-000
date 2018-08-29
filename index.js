function theBeatlesPlay(musicians,instruments) {
  var play = []
  for (var i = 0; i < musicians.length; i++) {
   play.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return play
}

function johnLennonFacts(facts) {
  var jlFacts = []
  var i = 0
  while (i < facts.length) {
    jlFacts.push(`${facts[i]}!!!`)
    i++
  }
  return jlFacts
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
    return array
}