function theBeatlesPlay(musicians, instruments) {
  const arr = []
    for (let i = 0, b = musicians.length; i < b; i++){
      arr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return arr
}

function johnLennonFacts(facts) {
  const lennonFacts = []
    let i = 0
      while(i < facts.length) {
        lennonFacts.push(`${facts[i]}!!!`)
        i++
      }
    return lennonFacts
}

function iLoveTheBeatles(l) {
  const arr = []
    do {
      arr.push("I love the Beatles!")
        l++
    } while (l < 15)
    return arr
}
