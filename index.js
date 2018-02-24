function theBeatlesPlay (musician, instruments){
  var finish = []
  for (var i = 0; i < musician.length; i++) {
    finish.push(`${musician[i]} plays ${instruments[i]}`)
  }
  return finish
}

function johnLennonFacts(facts){
  let i =  0
  while (facts.length > i) {
    facts[i] = (facts[i] + "!!!")
    i++
  }
  return facts
}

function iLoveTheBeatles (n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return array
}
