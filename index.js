function theBeatlesPlay(musicians, instruments) {
  const bandArray = [];

  for (let i = 0, l = musicians.length; i < l; i++) {
    bandArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return bandArray
}

function johnLennonFacts(facts) {
  const lennonFacts = []

  let i = 0
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(i) {
  const beatlesArray = []

  do {
    beatlesArray.push("I love the Beatles!")
    i ++
  }
  while (i < 15)

  return beatlesArray
}
