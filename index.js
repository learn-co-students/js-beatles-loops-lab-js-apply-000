function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return beatles;
}

function johnLennonFacts(facts) {
  for (var i=0; i<facts.length; i++) {
    facts[i] = facts[i] + '!!!'
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return loveArray;
}