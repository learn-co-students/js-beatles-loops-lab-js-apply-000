function theBeatlesPlay(musicians, instruments) {
  var info = [];
  for(var i = 0; i < musicians.length; i++) {
    info.push(musicians[i] + " plays " + instruments[i])
  }
  return info
}


function johnLennonFacts(facts) {
  var i = 0
  var excitedFacts = []
  while(i < facts.length) {
    excitedFacts.push(facts[i] + "!!!")
    i++
  }
  return excitedFacts
}


function iLoveTheBeatles(nbr) {
  var love = []
  do {
    love.push("I love the Beatles!")
    nbr++
  } while(nbr < 15)
  return love
}
