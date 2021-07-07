// add solution here
function theBeatlesPlay(musicians, instruments) {
  var playArray = []

  for(var i=0; i<musicians.length; i++) {
    playArray[i] = musicians[i] + " plays " + instruments[i]
  }

  return playArray
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

//or: facts.map(x => x + "!!!")

function iLoveTheBeatles(number) {
  var array = []

   do {
     array.push("I love the Beatles!")
     number++
   } while(number < 15)

   return array
}
