// add solution here

function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i=0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const loudFacts = []
  let i = 0;
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}!!!`), i++
  }
  return loudFacts
}

function iLoveTheBeatles(n) {
  const array = []
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array
}