function theBeatlesPlay(musicians, instruments) {
  let finalArr = []

  for (var i = 0; i < musicians.length; i++) {
    finalArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return finalArr
}


function johnLennonFacts(facts) {
  let factsArr = []

  let i = 0
  while (i < facts.length) {
    factsArr.push(`${facts[i]}!!!`)
    i++
  }

  return factsArr
}


function iLoveTheBeatles(number) {
  let arr = []

  do {
    arr.push('I love the Beatles!')
    number++
  }
  while (number < 15)

  return arr
}
