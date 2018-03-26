function theBeatlesPlay(musicians, instruments) {
  var beatlesStrings = []
  
  for (var i = 0; i < musicians.length; i++) {
    var currentMusician = musicians[i]
    var currentInstrument = instruments[i]
    beatlesStrings.push(`${currentMusician} plays ${currentInstrument}`)
  }
  
  return beatlesStrings
}

function johnLennonFacts(facts) {
  var beatlesFactsStrings = []
  
  for (var i = 0; i < facts.length; i++) {
    var someFact = facts[i]
    beatlesFactsStrings.push(`${someFact}!!!`)
  }
  
  return beatlesFactsStrings
}

function iLoveTheBeatles(number) {
  var loveStringArray = []
  do {
    loveStringArray.push("I love the Beatles!")
    number += 1
  } while (number < 15)
  return loveStringArray
  }
