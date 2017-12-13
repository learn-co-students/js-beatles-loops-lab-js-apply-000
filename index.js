function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  
  return array;
}

function johnLennonFacts(facts) {
  var factsArr = [];
  var i = 0; 
  while (i < facts.length) {
    factsArr.push(facts[i] + "!!!")
    i++;
  }
  
  return factsArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  
  do {
    arr.push("I love the Beatles!")
    num += 1;
  }
  while (num < 15)
  
  return arr;
}