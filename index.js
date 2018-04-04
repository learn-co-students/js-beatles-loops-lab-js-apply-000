function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayArray = []
  for (var i = 0, len = musicians.length; i < len; i++) {
    theBeatlesPlayArray.push(musicians[i] + " plays " + instruments[i])
  }
  return theBeatlesPlayArray;
}

function johnLennonFacts(facts) {
  var exclaimFacts = [];
  for (var i = 0, len = facts.length; i < len; i++) {
    exclaimFacts.push(facts[i] + "!!!");
  }
  return exclaimFacts;
}

function iLoveTheBeatles(parameter) {
  var iLoveTheBeatlesArray = [];
  var i = 0;
  do {
    iLoveTheBeatlesArray.push(`I love the Beatles!`);
    i++;
  } while ( i < parameter + 1 && parameter < 15);
  return iLoveTheBeatlesArray;
}
