// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = []
  for(var i = 0; i < 4; i++){
    array = [...array, (musicians[i] + " plays " + instruments[i])]
    
  }
  return array
}


function johnLennonFacts(facts){
  var reps = facts.length - 1
  while(reps >= 0){
    
    facts[reps] = facts[reps] + "!!!"
    
    reps = reps - 1
  }
  return facts
}


function iLoveTheBeatles(number){
  var emptyArray = []
  var i = 15 - number
  do {
    emptyArray = [... emptyArray, ('I love the Beatles!')]
    i = i - 1
  }
  while(i > 0)
  return emptyArray
}