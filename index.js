function theBeatlesPlay (musicians, instruments) {
  var heyJude = []
  for(var i = 0; i < musicians.length; i++) {
    heyJude[i] = musicians[i] + " plays " + instruments[i]
  }
  return heyJude
}

function johnLennonFacts (facts) {
  var wow = []
  var i = 0
  while (i < facts.length) {
    wow[i] = facts[i] + "!!!"
    i++
  }
  return wow
}

function iLoveTheBeatles(n) {
  var love = []
  var i = 0
  do {
    love[i] = "I love the Beatles!"
    i++
    n++
  } while(n < 15)
  return love
}
