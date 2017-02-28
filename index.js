function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings[i] = musicians[i] + " plays " + instruments[i];
  }
  return strings;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var excitingFacts = [];
  while (counter < facts.length) {
    excitingFacts.push(facts[counter] + '!!!');
    counter++;
  }
  return excitingFacts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return array;
}