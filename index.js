// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []

  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i])
  }

  return arr
}


function johnLennonFacts(facts) {
  var i = 0;
  // condition works because anything with a value is TRUE
  while (facts[i]) {
    facts[i] += '!!!'
    i++
  }

  return facts
}


function iLoveTheBeatles(n) {
  var arr =[]

  do {
    arr.push("I love the Beatles!")
    n++
  } while (n<15);

  return arr
}
