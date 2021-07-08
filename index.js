// add solution here
function theBeatlesPlay(musicians, instruments){
  var sentences = Array()
  
  for (var k = 0; k < musicians.length; k++){
    sentences.push(`${musicians[k]} plays ${instruments[k]}`)
  }
  
  return sentences
}

function johnLennonFacts(facts){
  var factsWithExclamation = Array()
  
  for (var fact of facts){
    factsWithExclamation.push(fact + "!!!")
  }
  
  return factsWithExclamation
}

function iLoveTheBeatles(n){
  var loveTheBeatlesNTimes = Array()
  
  do{
    loveTheBeatlesNTimes.push("I love the Beatles!")
    n += 1
  }while(n < 15)
  
  return loveTheBeatlesNTimes
}