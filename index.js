function theBeatlesPlay(musicians, instruments) {
  var whichBeatle = [];
  for(var i = 0; i < musicians.length; i++) {
    whichBeatle.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whichBeatle;
}

function johnLennonFacts(facts) {
  var i = 0;
  var lennonFacts = [];
  while(facts.length > i) {
    lennonFacts.push(`${facts[i]}!!!`);
    i++
  }
  return lennonFacts;
}

function iLoveTheBeatles(number) {
  var howMuch = [];
  do {
    howMuch.push('I love the Beatles!');
    number++;
  } while(number < 15);
  return howMuch;
}
