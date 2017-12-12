let musicians = ['Bob', 'Tom', 'John', 'Paul'];
let instruments = ['drums', 'guitar', 'flute'];

function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return phrases;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return phrases;
}
