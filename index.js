function theBeatlesPlay (musicians, instruments) {
  let res = []
  for (let i = 0; i < musicians.length; i++) {
    res.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return res
}

function johnLennonFacts (facts) {
  let res = []
  let i = 0;
  while (i < facts.length)  {
    res.push(`${facts[i]}!!!`)
    i++
  }
  return res
}

function iLoveTheBeatles (num) {
  let res = []

  do {
    res.push("I love the Beatles!")
    num++
  } while (num < 15)

  return res
}
