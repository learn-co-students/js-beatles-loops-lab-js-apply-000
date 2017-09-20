function theBeatlesPlay(musicians, instruments) {
  var playswhat = []
  var string
  for (var i = 0; i < musicians.length; i++) {
    string = `${musicians[i]} plays ${instruments[i]}`
    playswhat.push(string)
  /*} else {
    playswhat += `${musicians[i]} plays ${instruments[i]}.`
  }
 } */
  }
  return playswhat

}

function johnLennonFacts(facts) {
  for (let i =0; i < facts.length; i++) {
    facts[i] = facts[i]+ "!!!"
  }
  return facts
}

function iLoveTheBeatles(num) {
  var lovebeatles = []
  do {
    lovebeatles.push("I love the Beatles!")
    num++
  } while (num < 15)
  return lovebeatles
}
