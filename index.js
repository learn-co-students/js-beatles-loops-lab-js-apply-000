function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i])
  }

  return newArr;
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!";
    i++
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var newArr = [];
  var i = n;
  do {
    newArr.push("I love the Beatles!");
    i++
  }
  while (i < 15);
  return newArr;
}
