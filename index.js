// add solution here
function theBeatlesPlay (musicians, instruments) {
  var beatlesInstruments = []
  var i = 0
  for (i = 0; i < musicians.length; i ++) {
    beatlesInstruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesInstruments
}

function johnLennonFacts (facts) {
  var lennonFacts = []
  var i = 0
  while (i < facts.length) {
    lennonFacts.push(facts[i] + "!!!")
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles (n) {
  var love = []
  var i = 1
  do {
    love.push("I love the Beatles!")
    i++
  }
  while (i<15 && i<= 15-n )
  return love
}