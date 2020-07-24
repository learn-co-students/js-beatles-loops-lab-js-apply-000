
function theBeatlesPlay(musicians, instruments){
  var musicianInstruments = []
  for (let i=0;i<musicians.length;i++) {
      musicianInstruments.push(musicians[i] + " plays " + instruments[i])
  }
  return musicianInstruments
}


function johnLennonFacts(facts){
  var factsArray = []
  let i=0
  while (i<facts.length){
    factsArray.push(facts[i]+"!!!")
    i++
  }
  return factsArray
}


function iLoveTheBeatles(numbers){
  var loveBeatles = []
  do {
    loveBeatles.push("I love the Beatles!")
    numbers++
  }
  while (numbers < 15 );
  return loveBeatles
}