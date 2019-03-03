function theBeatlesPlay(musicians, instruments) {
  const empty = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return empty
}


///////


function johnLennonFacts(facts) {
  const excitedFacts = []

  let i = 0
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return excitedFacts
}

///////

function iLoveTheBeatles(number) {
  const empty = []

  do {
    empty.push('I love the Beatles!')
    number++
  } while (number < 15)

  return empty
}
