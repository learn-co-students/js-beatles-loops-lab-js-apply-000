function theBeatlesPlay (musicians, instruments) {
  var array = []
for (let i = 0; i < 4; i++) {
  array.push(musicians[i] + " plays " + instruments[i])
  
}
  return array
}

function johnLennonFacts (facts) {
  let i = 0
  var array = []
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
  
  i++;
  }
  return array
}

function iLoveTheBeatles (num) {
  let i = 15-num
  var array = []
  do {
    array.push("I love the Beatles!");
    i--;
  }
  while (num < 15&&i > 0)
  return array
}