// return what instrument each musician plays
function theBeatlesPlay(musicians, instruments) {
  var playsWhat = [];
    for (var i = 0; i < musicians.length; i++) {
      playsWhat.push(musicians[i] + ' plays ' + instruments[i]);
    }
    return playsWhat;
}

// add '!!!' to the end of each fact in an array
function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

// return 'I love the Beatles!' 15 - counter amount of times
function iLoveTheBeatles(counter) {
  var beatleCraze = [];
  do {
    beatleCraze.push('I love the Beatles!')
    counter++;
  }
  while (counter < 15);
  return beatleCraze;
}
