function theBeatlesPlay(musicians, instruments) {
  var results = [];

  for (var idx = 0; idx < musicians.length; idx += 1) {
    var ele = musicians[idx];
    results.push(ele + " plays " + instruments[idx]);
  }
  return results;
}

function johnLennonFacts(facts) {
  var result = [];

  var idx = 0;
  while (idx < facts.length) {
    result.push(facts[idx] + "!!!");
    idx += 1;
  }
  return result;
}

function iLoveTheBeatles(num) {
  var result = [];

  do {
    result.push("I love the Beatles!");
    num += 1;
  } while (num < 15);

  return result;
}
