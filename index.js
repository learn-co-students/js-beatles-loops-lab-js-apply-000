function theBeatlesPlay(musicians, instruments) {
  var results = [];
  for (var i = 0; i < musicians.length; i++) {
    results.push('' + musicians[i] + ' plays ' + instruments[i]);
  }
  return results;
}

function johnLennonFacts(facts) {
  var i = 0;
  //console.log(facts.length);
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var results = [];
  var i = num;
  do {
    results.push('I love the Beatles!');
    i++
  } while (i < 15);
  return results;
}