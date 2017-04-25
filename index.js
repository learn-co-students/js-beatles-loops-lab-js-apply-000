function theBeatlesPlay(musicians, instruments){
  var beatlesFacts = []
  for (var i = 0; i < musicians.length; i++){
    beatlesFacts.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesFacts
}

function johnLennonFacts(facts){
  var i = 0
  var excitedFacts = []
  while(i < facts.length){
    excitedFacts.push(facts[i].concat("!!!"))
    i++
  }
  return excitedFacts
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15);
  return array
}
