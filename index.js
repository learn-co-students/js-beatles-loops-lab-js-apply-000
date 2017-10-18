function theBeatlesPlay(musicians, instruments) {
  const band = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(facts) {
  let i = 0
  const excitingFacts = []
  while(i < facts.length) {
    excitingFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitingFacts
}

function iLoveTheBeatles(n) {
  const adulation = []
  do {
    adulation.push("I love the Beatles!")
    n++
  } while (n < 15)
  return adulation
}
