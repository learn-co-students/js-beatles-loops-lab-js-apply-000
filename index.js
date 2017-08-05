function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  var i;
  for (i = 0; i < musicians.length; i++) {
    plays[i] = musicians[i] + " plays " + instruments[i]
  }
  return plays
}


function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}


function iLoveTheBeatles(n) {
  var beatle = [];
  var i = 0;
  do {
      beatle[i] = "I love the Beatles!"
      i++
      n++
    }
    while (n < 15);
  return beatle
}
