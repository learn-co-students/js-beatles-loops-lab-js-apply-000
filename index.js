function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i]);
  }
  return empty;
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  var i = 0;
  while (i < facts.length) {
    loudFacts.push(facts[i] + "!!!")
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++
  } while (number < 15);
  return array;
}

