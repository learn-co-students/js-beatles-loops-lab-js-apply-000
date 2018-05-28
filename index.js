function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0, m=musicians.length; i < m; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  const excited = []
  var i = 0;
  while (i < facts.length) {
    excited.push(`${facts[i]}!!!`)
    i++;
  }
  return excited;
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n<15)
  
  return array;
}