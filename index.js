function theBeatlesPlay(musicians, instruments) {
  var ary = [];

  for (var i = 0; i < musicians.length; i++) {
    ary.push(musicians[i] + " plays " + instruments[i])
  }
  return ary;
}

function johnLennonFacts(facts) {
  var i = 0;
  var ary = [];
  while (i < facts.length) {
    ary.push(facts[i] + '!!!');
    i++;
  }
  return ary;
}

function iLoveTheBeatles(n) {
  var ary = [];
  var i = 0;
  if (n > 15) {
    ary.push("I love the Beatles!")
  }
  else {
  do {i++;
    ary.push("I love the Beatles!")
}

  while (i <= n);
}
  return ary;
}
