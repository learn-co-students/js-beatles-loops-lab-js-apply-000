function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i];
    arr.push(string);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  for (var i = 0; i < facts.length; i++) {
    arr.push(facts[i] + "!!!");
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var count = 0;
  while (count <= num){
    arr.push("I love the Beatles!")
    count++;
  }
  if (count < 15){
    return arr;
  } else {
  return "I love the Beatles!";
  }
}
