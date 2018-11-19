//"Musicians play instruments" till run out of musicians//
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for ( let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}
//Return facts w/ !!! at the end of every fact till run out of facts//
function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
    i++
  }
  return array
}
//Return "I love the Beatles!" 15 times//
function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n++
  } while (n < 15)
  return array
}
