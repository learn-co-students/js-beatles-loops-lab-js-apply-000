// add solution here

function theBeatlesPlay(musicians, instruments){
  var result = []
  for(var i=0;i<4;i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(facts){
  var i = 0
  while(i<facts.length){
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var result = []
  do{
    result.push("I love the Beatles!")
    n++
  } while (n < 15)
  return result
}

