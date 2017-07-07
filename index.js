function theBeatlesPlay(musicians, instruments){
  var match = []
  for (var i = 0; i < musicians.length; i++){
    match.push(musicians[i] + " plays " + instruments[i])
  }
  return match
}

function johnLennonFacts(facts){
  var updatedArray = []
  var i = 0
  while (i < facts.length){
    updatedArray.push(facts[i] + "!!!")
    i++
  }
  return updatedArray
}

function iLoveTheBeatles(x){
  var love = []
  do {
    love.push("I love the Beatles!")
    x++
  }
  while (x < 15);
  return love
}
