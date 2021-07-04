function theBeatlesPlay(musician, instrument) {
  var newArray = []
  for (let i = 0; i < musician.length; i++) {
    newArray.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}