// add solution here
function theBeatlesPlay(musicians, instruments){
  var combined = [];
   for (var i = 0; i < musicians.length; i++){
    var combinedString = musicians[i] + " plays " + instruments[i];
    combined.push(combinedString);
  }
  return combined;
}

function johnLennonFacts(facts) {
  var arr = [];
  var x = 0;
  
  while (x < facts.length) {

  arr.push(facts[x] + "!!!");
  x++;
  }
  return arr;
}

function iLoveTheBeatles(x) {
  var arr = [];
  var num = x;
  
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while (num < 15)
  return arr;
}