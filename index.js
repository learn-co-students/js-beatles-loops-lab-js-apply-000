var array = []

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts) {
  var array1 = []
  var i = 0
  while (i < facts.length) {
    array1.push(`${facts[i]}!!!`)
    i+=1;
  }
  return array1
  }

function iLoveTheBeatles(n) {
  var array2 = []
  do {
    array2.push("I love the Beatles!")
    n+=1
  } while (n < 15)
  return array2
}
