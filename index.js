function theBeatlesPlay(musicians, instruments) {
  var beatlesInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesInstruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesInstruments;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var moreFacts = [];
  var i = 0;
  while (i < facts.length) {
    moreFacts.push(facts[i] + "!!!");
    i++;
  }
  return moreFacts;
}

function iLoveTheBeatles(x) {
  var beatlesMania = [];
  do {
    beatlesMania.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return beatlesMania;
}
