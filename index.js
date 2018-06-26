
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}

function johnLennonFacts(facts){
  const biggerFacts = []
  var i = 0
  while (facts.length>i){
    biggerFacts.push(`${facts[i]}!!!`)
  i++;
  }
  return biggerFacts
}
function iLoveTheBeatles(n){
  var arr = []
  do {
    arr.push("I love the Beatles!");
    n++
  } while (n<15) {
    return arr
  }
}

