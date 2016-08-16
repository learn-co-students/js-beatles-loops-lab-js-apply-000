function theBeatlesPlay(musicians, instruments){
  var output = []
  for(var i=0; i<musicians.length; i++){
    output.push(musicians[i] + " plays " + instruments[i])
  }
  return output
}

function johnLennonFacts(facts){
  var output = []
  var i = 1
  while(i <= facts.length) {
    output.push(facts[i-1] + "!!!")
    i++
  }
  return output
}

function iLoveTheBeatles(number){
  var output = []
  do {
    output.push("I love the Beatles!")
    number++
  }
  while(number<15)
  return output
}
