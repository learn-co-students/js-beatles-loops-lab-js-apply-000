function theBeatlesPlay(musicians, instruments) {
  var empty = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    empty.push(musician + ' plays ' + instrument)
  }
  return empty;
}

function johnLennonFacts(facts) {
  var i = 0;
  var result = [];
  while (i < facts.length) {
    var fact = facts[i];
    result.push(fact + '!!!')
    i++;
  }
  return result;
}

function iLoveTheBeatles(n) {
  var result = [];
  do {
    result.push('I love the Beatles!')
    n++;
  } while (n < 15);
  return result;
}
