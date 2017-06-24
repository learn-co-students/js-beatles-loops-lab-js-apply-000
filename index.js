function theBeatlesPlay(musicians, instruments){
  var a = []
  var c = musicians.length
  for (var i = 0; i < c; i++) {
    a[i] = '' + musicians[i] + ' plays ' + instruments[i] + ''
  }
  return a
}

function johnLennonFacts(facts) {
  var a = []
  var c = facts.length
  var i = 0
  while (i < c) {
    a[i] = facts[i] + '!!!'
    i++
  }
  return a
}

function iLoveTheBeatles(number){
  var a = []
  var i = 0
  var c = number + 1
  do {
    a[i] = "I love the Beatles!"
    i++
}
    while(c < 15 && i < c) {}

    return a

}
