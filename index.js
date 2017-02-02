function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray.push(musician + " plays " + instrument);
  }
  return newArray
}

function johnLennonFacts(facts) {
  var factArray = [];
  var idx = 0;

  while(idx < facts.length) {
    var fact = facts[idx];

    factArray.push(fact + "!!!");
    idx++;
  }
  return factArray;
}

function iLoveTheBeatles(num) {
  var resultArray = [];

  do {
    resultArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return resultArray;
}
