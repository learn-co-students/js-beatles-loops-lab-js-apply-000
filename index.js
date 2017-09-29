function theBeatlesPlay(musicians,instruments){
  var retArray = []

  for (var i = 0; i< musicians.length; i++) {
    retArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return retArray
}

function johnLennonFacts(facts){
  var newFacts = []
  var i = 0
  while(i < facts.length){
    newFacts.push(facts[i] + '!!!')
    i = i+1
  }
  return newFacts
}

function iLoveTheBeatles(n){
  var retArray = []
  var i = 0
do {
  retArray.push("I love the Beatles!")
  i++
}
while(n < 15 && i < n+1)

return retArray
}
