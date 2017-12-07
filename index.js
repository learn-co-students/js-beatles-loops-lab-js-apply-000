function theBeatlesPlay(musicians, instruments) {
  var newStr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var player = musicians[i];
    var instrument = instruments[i];
    var str = player + " plays " + instrument;
    newStr.push(str);
  }
  
  return newStr;
}

function johnLennonFacts(facts) {
  var array = [];
  
  for (var i = 0; i < facts.length; i++) {
    var fact = facts[i];
    array.push(fact + "!!!");
  }
  
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  
  while (n < 15) {
    array.push("I love the Beatles!");
    n += 1;
  }
  
  if (n > 15) {
    return ["I love the Beatles!"];
  }
  
  return array;
}