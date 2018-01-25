function theBeatlesPlay(musicians, instruments) {
  var result = [];
  var i
    for (i=0; i<musicians.length; i++) {
        result[i] = musicians[i] + " plays " + instruments[i]}
    return result;
}
function johnLennonFacts(facts) {
  var i = 0
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(i) {
  var result = [];
  var x = 0
    do {
        result[x] = "I love the Beatles!";
        i++;
        x++;
    }
    while (i<15);
    return result
}
