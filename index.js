function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push (musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var lennonFacts = [];
  var i = 0;
  while (i < facts.length) {
  lennonFacts.push(facts[i] + "!!!");
  i++;  
  }
  return lennonFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++;
  }
  while (n < 15);
  return array;
}