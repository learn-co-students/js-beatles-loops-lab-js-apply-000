function theBeatlesPlay(musician,instrument) {
  var theBeatles = []
  for (let i=0; i<4; i++)
  theBeatles.push(`${musician[i]} plays ${instrument[i]}`)
  return theBeatles
}
function johnLennonFacts(fact) {
  var shoutFacts = []
  for (let i = 0; i<fact.length; i++){
  shoutFacts.push(`${fact[i]}!!!`)
  }
   return shoutFacts 
  }
  function iLoveTheBeatles(i) {
    var arr = []
    do {
      arr.push(`I love the Beatles!`)
      i++
    }
    while (i < 15)
    return arr
    if (i > 15) {
    return (`I love the Beatles!`)
    }
  }