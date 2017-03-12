function theBeatlesPlay(musicians, instruments) {
  var length = musicians.length;
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = musicians[i] + " plays " + instruments[i];
  }
  return result;
}

function johnLennonFacts(facts) {
  var result = new Array(facts.length);
  var i = 0;
  while (i < facts.length) {
    result[i] = facts[i] + "!!!";
    i++;
  }
  return result;
}

function iLoveTheBeatles(num) {
  var result = new Array();
  var i = num;
  do {
    result.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  return result;
}