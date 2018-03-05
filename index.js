function theBeatlesPlay(musicians, instruments) {
  var musicFacts = [];
  for (var i = 0; i < musicians.length; i = i + 1) {
    var fact =  musicians[i] + " plays " + instruments[i];
    musicFacts.push(fact);
  }
  return musicFacts;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  var happyLennon = [];
  while(i < facts.length) {
    var excitedFact = facts[i] + "!!!"
    happyLennon.push(excitedFact);
    i++;
  }
  return happyLennon;
}

function iLoveTheBeatles(x) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return love;
}