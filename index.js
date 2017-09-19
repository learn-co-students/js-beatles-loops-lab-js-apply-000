function theBeatlesPlay(musicians, instruments){
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var musicianInstrument = []
  for(var i = 0; i < 4; i++){
    musicianInstrument[i] = musicians[i] + " plays " + instruments[i]
  }
  return musicianInstrument
}

function johnLennonFacts(facts){
  var i = 0
  var exclamatedFacts = []
  while(i < facts.length){
    exclamatedFacts[i] = facts[i] + "!!!"
    i++
  }
  return exclamatedFacts
}

function iLoveTheBeatles(number){
  var string = "I love the Beatles!"
  var array = []
  var i = 0
  do{
    array[i] = string
    i++
    number++
  }
  while(number < 15)
  return array
}
