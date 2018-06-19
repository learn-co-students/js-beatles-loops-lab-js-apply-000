function theBeatlesPlay (musicians, instruments) {
  var ret = [];
  for(var i = 0; i < musicians.length; i++) {
    ret.push(musicians[i] + " plays " + instruments[i]);
  }
  return ret;
}

function johnLennonFacts (facts) {
  var index = 0;
  var ret = [];
  while(index < facts.length) {
    ret.push(facts[index] + "!!!");
    index++;
  }
  return ret;
}

function iLoveTheBeatles(number) {
  var ret = [];
  do {
    ret.push("I love the Beatles!");
    number++;
  }
  while(number < 15);
  return ret;
}