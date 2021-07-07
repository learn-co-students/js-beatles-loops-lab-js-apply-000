function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var string = `${musician} plays ${instruments[i]}`;
    arr.push(string);
  }
  
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  
  while (facts.length > i) {
    var fact = facts[i];
    arr.push(fact + "!!!");
    i++;
  }
  
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  
  return arr;
}