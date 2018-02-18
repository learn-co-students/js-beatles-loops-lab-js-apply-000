function theBeatlesPlay(musicians, instruments){
  var sentences = []
  for(var i=0; i<musicians.length; i++){
    sentences.push(musicians[i] + " plays " + instruments[i])
  }
  return sentences
}
function johnLennonFacts(facts){
  var returnFacts = []
  var currentFact = 0
  while (returnFacts.length != facts.length){
    returnFacts.push(facts[currentFact] + "!!!")
    currentFact++
  }
  return returnFacts
}
function iLoveTheBeatles(number){
  var returnArray = []
  do{
    returnArray.push("I love the Beatles!")
  } while (returnArray.length <= number && number <15)
  return returnArray
}
