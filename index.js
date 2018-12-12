function theBeatlesPlay(musicians, instruments) {
  var musicTime = [];
  for(var i =  0; i < musicians.length; i++) {
    musicTime.push(musicians[i] + " plays " + instruments[i]);
  }
  return musicTime;
}

function johnLennonFacts(facts) {
  var excitedFacts = [];
  var x = 0;
  while(x < facts.length) {
    excitedFacts.push(facts[x]+"!!!");
    x++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(y) {
  var numBeats = [];
  do {
    numBeats.push("I love the Beatles!");
    y++;
  }
  while (y < 15); {
  }
  return numBeats;
}