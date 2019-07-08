// add solution here



function theBeatlesPlay(musicians, instruments) {
  var results = []
  for (var i = 0; i < musicians.length; i++){
    results.push(musicians[i] + " plays " + instruments[i])
  }
  return results
}

function johnLennonFacts(facts){
  var i = 0 
  while (i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number1){
  var arr = []
  while (number1 < 15){
    arr.push("I love the Beatles!")
    number1 += 1
  }
  if (arr.length > 0){
    return arr
  }else{
    return ["I love the Beatles!"]
  }
}