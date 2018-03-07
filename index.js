function theBeatlesPlay (musicians, instruments){
  var output = [];
  for (var i = 0; i < musicians.length; i++){
    output.push(musicians[i] + " plays " + instruments[i]);
  }
  return output;
}

function johnLennonFacts (facts){
  var output = [];
  while (facts.length > 0){
    output.push(facts.shift() + "!!!");
  }
  return output;
}

function iLoveTheBeatles (n){
  var output = [];
  do {
    output.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return output;
}
