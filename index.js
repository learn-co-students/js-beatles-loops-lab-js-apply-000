function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    console.log(facts[] + '!!!')
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    // magic happens here
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}
