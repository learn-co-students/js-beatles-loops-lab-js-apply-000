function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i=0; i < musicians.length; i++) {
    empty.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return empty
}
function johnLennonFacts(facts) {
  var emptyfacts = [];
  var i = 0;
  while (i< facts.length) {
    emptyfacts.push(facts[i] + '!!!');
    i++;
  }
  return emptyfacts;
}
function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
     n++;
  } while (n < 15);
    return empty;
}  