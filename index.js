function theBeatlesPlay(musicians, instruments) {
  var sentences = []
  for (var i = 0; i < musicians.length; i++) {
    sentences[i] = musicians[i] + " plays " + instruments[i]
  }
  return sentences
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i]+="!!!"
  }
  return facts
}

function iLoveTheBeatles(input) {
  var loves = []
  var i=0
  do {
    loves[i] = "I love the Beatles!"
    i++
  } while ( i<=input && input<15 );
  return loves
}