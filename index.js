var i
var len

function theBeatlesPlay(musicians, instruments){
  var plays = []
  for (i = 0, len = musicians.length; i<len; i++){
    var iteration = musicians[i] + " plays " + instruments[i]
    plays.push(iteration)
  }
  return plays
}

function johnLennonFacts(facts){
  var i = 0
  var len = facts.length
  var excited = []
  while (i < len) {
    var iteration = facts[i] + "!!!"
    excited.push(iteration)
    i++
  }
  return excited
}

function iLoveTheBeatles(times){
  var repeated = []
  do{
    repeated.push("I love the Beatles!")
    times++
  }
  while( times<15)
  return repeated
}
