// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + " plays " + instruments[i]
    emptyArray.push(sentence)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    num++
  }
  while(num < 15)
  return emptyArray
}