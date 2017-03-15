function theBeatlesPlay(musician, instrument) {
  const array = []
  for (let i = 0, l = musician.length; i < l; i++) {
    array.push (`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const loudFacts = []
  let i = 0
  while (i < facts.length) {
    loudFacts.push (`${facts[i]}!!!`)
    i++
  }
  return loudFacts
}

function iLoveTheBeatles(n) {
  const array = []
  do {
    array.push(`I love the Beatles!`)
    n++
  } while (n < 15);
  return array
}
