function theBeatlesPlay(musicians, instruments) {
  let playList = []

  for (let i = 0; i < musicians.length; i++) {
    playList.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return playList
}

function johnLennonFacts(facts) {

  for (let i = 0; i < facts.length; i++) {
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}

function iLoveTheBeatles(num) {
  let arr = []

  do {
    arr.push(`I love the Beatles!`)
  } while (num < 15)

  return arr
}
