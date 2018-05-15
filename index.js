function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansAndInstruments;
}

function johnLennonFacts(facts) {
  var i = 0;
  var lennonFacts = [];
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(n) {
  var i = 0;
  var beatlesLove = [];
  do {
      beatlesLove.push("I love the Beatles!");
      i++;
    }
    while (i <= n && n < 15);
  return beatlesLove;
}
