

function theBeatlesPlay(musicians, instruments) {
  let play = []
  let i
    for (i = 0; i < musicians.length; i++) {
       play.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return play;
}


function johnLennonFacts(facts) {
  let i = 0
  let array = []
  while (i < facts.length) {
    array.push(facts[i] + '!!!')
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!")
    number ++
  } while(number < 15)
  return array
}
