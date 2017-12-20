function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i=0;i < musicians.length;i++) {
    var words = musicians[i] + ' plays ' + instruments[i]
    empty[i] = words
  }
  return empty
}

function johnLennonFacts(facts) {
  var i = 0
  var words = []
  while (facts[i]) {
    words[i]=facts[i]+"!!!"
    i++
  }
  return words
}

function iLoveTheBeatles(numbra) {
  var i = 0
  var empty = []
  do {
    empty[i]="I love the Beatles!"
    i++
  } while (numbra<15 && i <= numbra)
  return empty
}