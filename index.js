// add solution here
function theBeatlesPlay(musicians, instruments){
  var res = []
  
  for (var i=0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i]
    res.push(str)
  }
  
  return res
}

function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  
  return facts
}

function iLoveTheBeatles(n){
  var res = []
  
  do{
    res.push("I love the Beatles!")
    n++
  }  while(n < 15)
  return res
}