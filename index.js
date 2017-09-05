function theBeatlesPlay(musicians, instruments) {
  var members = [];

  for(var i = 0; i < musicians.length; i++) {
    members.push(musicians[i] + " plays " + instruments[i]);
  }
  return members;
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  var n = 0;
  while(n < facts.length) {
    loudFacts.push(facts[n] + "!!!")
    n++
  }
  return loudFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    n++
  }
  while (n < 15);
  return array;
}
