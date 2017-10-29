function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    arr.push(string);
  }
  return arr;
}

function johnLennonFacts (facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles (number) {
  var arr = [];
  var i = 0;
  var text = "I love the Beatles!";
  if (number > 15) {
    return text;
  }
  do {
    arr[i] = text;
    i++;
  }
  while (i <= number);
  return arr;
}
