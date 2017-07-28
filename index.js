function theBeatlesPlay(musicians, instruments){
  var theyPlay = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++){
    theyPlay[i] = musicians[i] + ' plays ' + instruments[i]
  };
  return theyPlay
}

function johnLennonFacts(facts){
  var excitingFacts = [];
  var i = 0;
  for (i = 0; i < facts.length; i++){
    excitingFacts[i] = facts[i] + "!!!";
  }
  return excitingFacts
}

function iLoveTheBeatles(number){
  var beatlesLove = []
  var i = 0
  if (number < 15) {
    do {
    beatlesLove[i] = "I love the Beatles!"
    i++
    }
    while (i <= number);
  }
  else {
    return "I love the Beatles!"
  }
  return beatlesLove
}
