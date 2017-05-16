function theBeatlesPlay(musicians,instruments){
  const array = [];
  for (let i = 0, l = musicians.length; i < l ; i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array
}

function johnLennonFacts(facts) {
  const fatFacts = [];
  let i = 0
  while (i < facts.length){
    fatFacts.push(`${facts[i]}!!!`)
    i++
  }
  return fatFacts
}

function iLoveTheBeatles(n){
  const store = [];
  do {
    store.push('I love the Beatles!')
    n++
  } while (n < 15) {
    return store
    }
  }
