
function theBeatlesPlay(musicians, instruments) {

  return musicians.map((e,i) => `${e} plays ${instruments[i]}`)
}

function johnLennonFacts(facts) {

  return facts.map(e => e + '!!!')
}

function iLoveTheBeatles(n) {
  return n <= 16 ? 
              new Array(n+1).fill('I love the Beatles!')
              : ['I love the Beatles!']

}