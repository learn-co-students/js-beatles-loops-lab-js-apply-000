function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = [];
  var counter = 0
  while (counter < facts.length) {
    array.push(`${facts[counter++]}!!!`)
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}