// add solution here
function theBeatlesPlay(musicians, instruments) {
  var band = [];
  var i = musicians.length
  for (i = 0; i < musicians.length; i++) {
    var musician = musicians[i]
    var instrument = instruments[i]
    var element = musician + " plays " + instrument
    band.push(element)
  }
  
  return band
}

function johnLennonFacts(facts) {
  var i = 0
  var loudFacts = [];
  while (facts[i]) {
    var oldFact = facts[i]
    var newFact = oldFact + "!!!"
    loudFacts.push(newFact)
    i++
  }
  return loudFacts
}

function iLoveTheBeatles(num) {
  var array1 = [];
  var i = num
  if (num <15) {
    do {
    array1.push("I love the Beatles!")
    i++
    } while (i<15);
    
  } else {
    array1.push("I love the Beatles!")
  }
  return array1
}