function theBeatlesPlay(musicians, instruments) {
  const newArray = [];

  for (let i = 0, n = musicians.length; i < n; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return newArray
}

function johnLennonFacts(facts) {
  const exclaimedFacts = [];
  
  let i = 0
  while (i < facts.length) {
    exclaimedFacts.push(`${facts[i]}!!!`)
  i++
  }
  
  return exclaimedFacts
}

function iLoveTheBeatles(number) {
  const loveArray = [];
  
  do {
    loveArray.push(`I love the Beatles!`)
    number++
  } while (number < 15)
  
  return loveArray;
}

