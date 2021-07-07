// add solution here

var result = [];

function theBeatlesPlay(musicians, instruments){
  for (let i = 0; i < musicians.length; i++) {
  result.push(`${musicians[i]} plays ${instruments[i]}`)
}

return result
}

function johnLennonFacts(noFact){
  var number = 0
  var newFacts = []
  while (number < noFact.length) {
  newFacts.push(`${noFact[number]}!!!`)
  number++
  }
  return newFacts
}


function iLoveTheBeatles(number){
  var whatsThis = []
  
  do {
  whatsThis.push("I love the Beatles!")
  number++
} while (number < 15);
  
  return whatsThis
}
