// add solution here
function theBeatlesPlay(musicians, instruments) {
var emptyArray = [];  
for (let i = 0; i < musicians.length; i++) { 
 emptyArray.push(musicians[i] + " plays " + instruments[i]);
}
return emptyArray  
}

function johnLennonFacts(facts) {
  var emptyArray = [];
  var x = 0; 
  while (x < facts.length) {
    emptyArray.push(facts[x] + "!!!");
    x++
  }
  return emptyArray
}
function iLoveTheBeatles(number) {
var y = number;
var emptyArray = [];
do { 
  emptyArray.push("I love the Beatles!");
  y++
}
while (y<15) 
return emptyArray
}
