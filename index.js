function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band[i] = musicians[i] + " plays " + instruments[i];
  }
  return band;
}

function johnLennonFacts(facts) {
  var i = 0;
  var x = [];
  while (i < facts.length) {
    x[i] = facts[i] + "!!!";
    i++;
  }
  return x;
}

function iLoveTheBeatles(x) {
  var y = [];
  var i = 0;
  do {
    y[i] = "I love the Beatles!";
    i++;
    x++;
  }
  while (x < 15);
  return y;
}
