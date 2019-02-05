// add solution here

function theBeatlesPlay(musicians, instruments) {
  const play = []
  
  for (var i = 0; i < musicians.length; i++) {
    play.push(musicians[i] + " plays " + instruments[i])
  }
  
  return play

}

function johnLennonFacts(array) {
  var exclamation = []
  for (var i = 0; i < array.length; i++) {
    exclamation.push(array[i] + "!!!")
  }
  
  return exclamation
 
}

function iLoveTheBeatles(num) {
  var newSentence = []
  do {
    newSentence.push("I love the Beatles!")
    num++
    
  } while (num < 15) return newSentence

}


