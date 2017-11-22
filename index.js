function theBeatlesPlay(musicians, instruments) {
  const beatlesArr = []

for (let i = 0, y = musicians.length; i < y; i++) {

  beatlesArr.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return beatlesArr
}

function johnLennonFacts(facts) {
  let allFacts = []

  let i = 0;
  while (i<facts.length) {
    allFacts.push(`${facts[i]}!!!`)
    i++
  }
  return allFacts
}

function iLoveTheBeatles(number) {
  const loveCount = [];
  do {
    loveCount.push("I love the Beatles!")
    number++
  } while (number < 15)
    return loveCount
}
