function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}


function johnLennonFacts(facts) {
  var factArray = [];
  let i = 0;
  while (i < facts.length) {
    factArray.push(`${facts[i]}!!!`)
    i++
  }
  return factArray
}

function iLoveTheBeatles(i) {
  var array = [];
  do {
  array.push('I love the Beatles!')
    i++
} while (i < 15)
  return array
}
