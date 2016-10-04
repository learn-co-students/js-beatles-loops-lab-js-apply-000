function theBeatlesPlay(musicians, instruments){
  var plays = []
  for (var i=0;i<musicians.length;i++){
    plays.push(musicians[i] + " plays " + instruments[i])
  }
  return plays
}

function johnLennonFacts(facts){
  var i=0
  while (i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}
function iLoveTheBeatles(num){
  var emptyArr = []
  do {
    emptyArr.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  return emptyArr
}
