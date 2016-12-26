function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  var str = '';

  for (var i = 0; i < musicians.length; i++) {
    str = musicians[i] + " plays " + instruments[i];
    beatles.push(str);
  }

  return beatles;
}

function johnLennonFacts(facts) {
  var factsArr = [];
  var i = 0;

  while (i < facts.length) {
    factsArr.push(facts[i] + "!!!");
    i++;
  }

  return factsArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var str = 'I love the Beatles!';
  var i = 0;

  do {
    arr.push(str);
    i++;
  } while (i <=num && num < 15)

  return arr;
}
