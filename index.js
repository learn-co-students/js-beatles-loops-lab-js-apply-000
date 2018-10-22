function theBeatlesPlay(musicians, instruments){
  let arr = []
  for (let i = 0, j = musicians.length; i < j; i++){
    var str = musicians[i] + " plays " + instruments[i];
    arr.push(str)
  } return arr
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
