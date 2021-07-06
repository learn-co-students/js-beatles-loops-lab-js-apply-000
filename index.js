function theBeatlesPlay(musicians, instruments){
  var allM = []
  for (var i=0; i<musicians.length; i++){
    allM.push(musicians[i] + " plays " + instruments[i])
  }
  return allM
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts){
  var excitedFacts = []
  var i=0
  while (i<facts.length){
    excitedFacts.push(facts[i] + "!!!")
    i++
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