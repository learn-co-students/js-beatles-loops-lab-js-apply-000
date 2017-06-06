function theBeatlesPlay(musicians, instruments) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums",]
  var whoPlaysWhat = []
  for (var i = 0; i < 4; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])  
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
//  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}

function iLoveTheBeatles(param) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    param++
  }
  while (param < 15)
  return emptyArray
}