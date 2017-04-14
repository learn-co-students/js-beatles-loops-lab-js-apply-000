function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    arr.push(musician + " plays " + instrument);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while (i < facts.length) {
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  arr.push("I love the Beatles!");
  while (n < 14) {
    n++;
    arr.push("I love the Beatles!")
  }
  return arr;
}
