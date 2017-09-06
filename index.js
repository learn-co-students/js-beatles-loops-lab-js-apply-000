function theBeatlesPlay(musicians, instruments) {
  let array = [];

  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}


function johnLennonFacts(facts) {
  let l = facts.length
  let i = 0
  let excitingFacts = []

  while(i < l) {
    excitingFacts.push(facts.shift() + "!!!")
    i++
  }
  return excitingFacts
}


function iLoveTheBeatles (n) {
  let array = []

  do {
    array.push('I love the Beatles!');
    n++
  } while (n < 15);
  return array
}
