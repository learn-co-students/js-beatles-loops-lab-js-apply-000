function theBeatlesPlay(musicians, instruments) {
  var a = []
  for(var i = 0; i < musicians.length; i++){
    a.push(musicians[i] + ' plays ' + instruments[i])
  }
  return a
}

function johnLennonFacts(facts) {
  var a = []
  for(var i = 0; i < facts.length; i++){
    a.push(facts[i] + '!!!')
  }
  return a
}

function iLoveTheBeatles(times) {
  var a = []
  do {
    a.push("I love the Beatles!")
    times--
  }
  while (times < 15 && times >= 0)
  return a
}
