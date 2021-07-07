// add solution here


function theBeatlesPlay(musicians, instruments) {
  var finalarray = [];
  
  
  
  for (var i = 0; i < musicians.length; i++) {
    finalarray.push(musicians[i] + " plays " + instruments[i]);
  }
  return finalarray;
}


function johnLennonFacts(facts) {
  var finalarray = [];
  
  var i = 0
  while (i < facts.length) {
    finalarray.push(facts[i] + "!!!");
    i++
  }
  return finalarray;
}

function iLoveTheBeatles(i) {
  var rockRoll = []
  do {
    rockRoll.push("I love the Beatles!")
    i++
  }
  while (i < 15)
  
  return rockRoll
}





