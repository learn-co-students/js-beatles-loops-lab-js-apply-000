// add solution here

function theBeatlesPlay(musicians, instruments) {
  var list = []
  
  for (var i = 0; i < musicians.length; i++) {
    list.push(musicians[i] + " plays " + instruments[i])
  }
  
  return list
}

function johnLennonFacts(facts) {
  var output = []
  var index = 0
  
  while (index < facts.length) {
    output.push(facts[index] + "!!!")
    index += 1
  }
  
  return output
}

function iLoveTheBeatles(number) {
  var list = []
  
  do {
    list.push("I love the Beatles!")
    number += 1
  }
  
  while (number < 15)
  
  return list
}
