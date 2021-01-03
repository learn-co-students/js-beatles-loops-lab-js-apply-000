// add solution here
function theBeatlesPlay(musicians,instruments) {
  var strings = []
  for (var i = 0; i < musicians.length; i++) {
    strings.push(musicians[i]+" plays "+instruments[i])
  }
  return strings
}

function johnLennonFacts(facts) {
  var strings = []
  var i = 0
  while (i < facts.length) {
    strings.push(facts[i]+"!!!")
    i += 1
  }
  return strings
}

function iLoveTheBeatles(times) {
  var strings = []
  do {
    strings.push("I love the Beatles!")
    times -= 1
  }
  while (times >= 0 && times < 15)
  
  return strings
}