function theBeatlesPlay(musicians, instruments) {
  const arr = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  const excitedFacts = []

  let i = 0
  while (i < facts.length) {
  excitedFacts.push(`${facts[i]}!!!`)
  i++
  }
  return excitedFacts
}

function iLoveTheBeatles(n) {
  const repeatedPraise = [] //why call this cons instead of var?

  do {
    repeatedPraise.push("I love the Beatles!")
    n++
  }
  while (n < 15);
  return repeatedPraise
}
