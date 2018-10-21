

function theBeatlesPlay(musicians, instruments){
var emptyArray = [];
for (var i = 0; i < musicians.length; i++) {
  emptyArray.push(musicians[i] + " plays " + instruments[i]);
 }
 return emptyArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var emptyArray = [];
  while (i < facts.length){
    emptyArray.push(facts[i] + "!!!");
    i = i + 1;
  }
  return emptyArray;
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
     emptyArray.push("I love the Beatles!");
     n = n + 1;
  } while (n < 15);
  
  return emptyArray;
  
}