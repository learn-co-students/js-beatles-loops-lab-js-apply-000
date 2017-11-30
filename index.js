function theBeatlesPlay(musicians, instruments) {
  var newStrings = [];
  var i;
  for(i = 0; i < musicians.length; i++) {
    newStrings.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return newStrings;
}

function johnLennonFacts(facts) {
  var i = 0;
  var exclaimedFacts = [];
  while(i < facts.length) {
    exclaimedFacts.push(facts[i] + '!!!');
    i++;
  }

  return exclaimedFacts;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push('I love the Beatles!');
    number++;
  } while(number < 15);

  return newArray;
}
