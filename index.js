function theBeatlesPlay(musician, instrument) {
  const arr = []

  for (let i = 0, x = musician.length; i < x; i++){
    arr.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  const  excitedFacts = []

  let i = 0
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitedFacts
}

function iLoveTheBeatles(num) {
  const arr = []

  do {
    arr.push('I love the Beatles!');
    num++
} while (15 > num)

return arr
}
