function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for (var i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return plays;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + '!!!');
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var loveBeatles = [];
  do {
    loveBeatles.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return loveBeatles;
}
