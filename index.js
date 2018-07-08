function theBeatlesPlay(musicians, instruments) {
  var emptyarray = [] ; 
  for(let i = 0; i < musicians.length; i++) {
   emptyarray.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return emptyarray
}

function johnLennonFacts(facts) {
  var efacts =[] ;
  let i = 0
  while (i < facts.length) {
    efacts.push(`${facts[i]}!!!`)
    i++;
  }
  return efacts
}

function iLoveTheBeatles(n) {
var array = []


do {
  array.push("I love the Beatles!");
  n++;
  } while(n < 15)
  return array
}
  