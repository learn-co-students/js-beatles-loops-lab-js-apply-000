function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i=0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr
}



function johnLennonFacts(facts) {
  var arr = []
  for(var i = 0; i < facts.length; i++) {
    arr.push( facts[i] + "!!!")
    
  }
  return arr
  
}

function iLoveTheBeatles(n) {
  var arr = []
  
  if (n > 15) {
    return ["I love the Beatles!"]
  }
  
  do {
    arr.push("I love the Beatles!")
    
  }
  while (arr.length <= n)
  return arr
}
