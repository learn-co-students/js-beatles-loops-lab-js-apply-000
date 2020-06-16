function theBeatlesPlay(musicians, instruments) {
  var musiciansPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansPlay;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var loveStrings = [];
  do {
    loveStrings.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return loveStrings;
}
