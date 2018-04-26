function theBeatlesPlay(musicians, instruments){
  var theBeatles = []
  var i
  for (i = 0; i < musicians.length; i++){
    theBeatles.push(musicians[i] + " plays " + instruments[i])
  }
  return theBeatles
}

function johnLennonFacts(facts){
  var i = 0
  var jlFacts = []
  while(i<facts.length){
    jlFacts.push(facts[i] + "!!!") 
    i += 1
  }
    return jlFacts
}

function iLoveTheBeatles (num){
  var strings = []
  var i = 0
  do {
    strings.push("I love the Beatles!")
    i ++
  } while (i<=num && num<15)
  return strings
}