function theBeatlesPlay(beatles, instruments){
  var out = []
  for(var i=0; i<beatles.length; i++){
    out.push(`${beatles[i]} plays ${instruments[i]}`)
  }
  return out
}

function johnLennonFacts(facts){
  var i = 0
  var out = []
  while(i<facts.length){
    out.push(`${facts[i]}!!!`)
    i++
  }
  return out
}

function iLoveTheBeatles(number){
  var out = ["I love the Beatles!"]
  while(number<14){
    out.push("I love the Beatles!")
    number++
  }
  return out
}