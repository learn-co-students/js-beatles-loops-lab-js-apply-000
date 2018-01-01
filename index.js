function theBeatlesPlay(musicians, instruments){
  var result = []
  for(var i = 0; i < musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(factsArray){
  var result = []
  var i = 0
  while(i < factsArray.length){
    result.push(`${factsArray[i]}!!!`)
    i++
  }
return result
}

function iLoveTheBeatles(num){
  var result = []
  do{
    result.push("I love the Beatles!")
    num++
  } while(num < 15)
  return result
}