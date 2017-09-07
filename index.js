function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }

  return arr;
}

function johnLennonFacts(facts) {
  var newArr = [];
  var i = 0;

  while (i < facts.length) {
    newArr.push(facts[i] + "!!!");
    i++;
  }

  return newArr;
}

function iLoveTheBeatles(n) {
  var arr = [];

  do {
    n++;
    arr.push("I love the Beatles!");
  } while (n < 15);

  return arr;
}
