// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  const Facts=[]
  let i=0
  while (i<facts.length){
    Facts.push(`${facts[i]}!!!`)
    i++
  }
  return Facts

}

function iLoveTheBeatles(x){
  const arr = []
  do {
    arr.push('I love the Beatles!')
    x++
  }
    while (x<15)
  return arr
}
