// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var newPair = musicians[i] + " plays " + instruments[i];
    array.push(newPair);
  }
  
  return array
}

function johnLennonFacts (facts) {
  var index = 0
  var array = []
  while (index < facts.length) {
    array.push(facts[index] + "!!!");
    index++;
  }
  return array
}

function iLoveTheBeatles (num) {
  var array = [];
  
  do {
    array.push("I love the Beatles!");
    num++;
  }
  
  while (num < 15);
  
  return array
}