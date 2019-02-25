function theBeatlesPlay(musicians, instruments) {
  var playOut = [];
  for (var i = 0; i < musicians.length; i++) {
    playOut.push(musicians[i] + " plays " + instruments[i]);
  }
  return playOut;
}

function johnLennonFacts(facts) {
  var factOut = [];
  var i = 0;
  while (i < facts.length) {
    factOut.push(facts[i] + "!!!");
    i++;
  }
  return factOut;
}

function iLoveTheBeatles(x) {
  var loveOut = [];
  do {
    loveOut.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return loveOut;
}