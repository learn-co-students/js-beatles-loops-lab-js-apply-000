function theBeatlesPlay(musician, instrument) {
  var emptyArray = [];
  for (var i=0; i < musician.length; i++) {
    emptyArray.push(musician[i] + ' plays ' + instrument[i]);
  }
  return emptyArray;
}
function johnLennonFacts(facts) {
  var emptyFacts = [];
  var i = 0;
  while (i < facts.length ) {
    emptyFacts.push(facts[i] + '!!!');
    i++;
  }
  return emptyFacts;
}
function iLoveTheBeatles(n) {
  var emptyN = [];
  do {
    n++;
    emptyN.push("I love the Beatles!");
  } while (n < 15);
  return emptyN;
}