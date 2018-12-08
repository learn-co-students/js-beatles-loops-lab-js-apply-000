function theBeatlesPlay(musicians, instruments){
  var allM = []
  for (var i=0; i<musicians.length; i++){
    allM.push(musicians[i] + " plays " + instruments[i])
  }
  return allM
}

function johnLennonFacts(){
  var facts = ["He was born after 30 hours of labor", "He was expelled from school at age 5", "He was a fan of Elvis Presley", "He discovered in adult life that he was dyslexic"]
  var excitedFacts = []
  var i=0
  while (i<facts.length){
    excitedFacts.push(facts[i] + "!!!")
  }
  return excitedFacts
}

function iLoveTheBeatles(num){
  var love = []
  do {
    love.push("I love the Beatles!")
    num++
  } while (num<15)
  return love
}