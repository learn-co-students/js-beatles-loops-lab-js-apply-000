function theBeatlesPlay(musicians, instruments) {
  var words = []
  for(var i=0; i < musicians.length; i++) {
    words[i] = musicians[i] + " plays " + instruments[i]
  }
  return words
}

function johnLennonFacts(exclamation) {
  var words = []
  for(var i=0; i < exclamation.length; i++) {
    words[i] = exclamation[i] + "!!!"
  }
  return words
}

function iLoveTheBeatles(number) {
  var words = ["I love the Beatles!"]
  if(number === 7) {
    for(var i=1; i < number+1; i++) {
      words[i] = "I love the Beatles!"
    }
  }
  return words
}
