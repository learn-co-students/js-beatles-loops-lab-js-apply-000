function theBeatlesPlay(musicians, instruments) {
  let musicianInstrumentPairing = [];
  for (let i = 0; i<musicians.length; i++) {
    musicianInstrumentPairing.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musicianInstrumentPairing;
}
function johnLennonFacts(facts) {
  let excitedFacts = [];
  let i = 0;
  while (facts[i]) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return excitedFacts;
}
function iLoveTheBeatles(number) {
  let beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return beatleLove;
}