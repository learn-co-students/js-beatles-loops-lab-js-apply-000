function theBeatlesPlay(musicians, instruments) {
  let arr = []
  for (let i = 0; i < musicians.length; i++) {
    arr[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return arr
}

function johnLennonFacts(facts) {
  let arr = facts
  let i = 0
  while (i < facts.length) {
    arr[i] += "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles(number) {
  let arr = []
  let i = number
  do {
    i++
    arr.push("I love the Beatles!")
  } while (i < 15)
  return arr
}