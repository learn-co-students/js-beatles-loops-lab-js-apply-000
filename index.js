function theBeatlesPlay(musicians, instruments) {
  var play = []
  for (var i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(facts) {
  var array = []
  while (array.length < facts.length) {
    array.push(facts[array.length] + "!!!");
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
