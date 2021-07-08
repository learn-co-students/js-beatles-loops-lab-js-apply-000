function theBeatlesPlay(musicians, instruments) {
    const barr = []
    
    for (let i = 0; i < musicians.length; i++) {
      barr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    
    return barr
}

function johnLennonFacts(facts) {
  const shoutfacts = []
  
  let i = 0
  while (i < facts.length) {
    shoutfacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutfacts
}

function iLoveTheBeatles(n) {
  const arr = []
  
  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)
  return arr
}
