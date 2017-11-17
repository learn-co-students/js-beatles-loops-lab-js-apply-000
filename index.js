function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return band;
}

function johnLennonFacts(facts) {
  var x = 0;
  while (x < facts.length) {
    facts[x] += '!!!';
    x++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var beatlesArray = [];
  do {
    beatlesArray.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return beatlesArray;
}
