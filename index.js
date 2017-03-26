function theBeatlesPlay(musicians, instruments) {
  var musiciansInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansInstruments
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while ( i < facts.length) {
    newFacts[i] = `${facts[i]}!!!`;
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(j) {
  var loveB =[];
  do {
    loveB.push("I love the Beatles!");
    j++;
  } while (j < 15);
  return loveB
}
