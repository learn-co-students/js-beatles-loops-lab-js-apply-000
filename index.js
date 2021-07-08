// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!"); i++
  }
    return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n += 1
  }
  while (n < 15);
return array
}
