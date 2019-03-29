// add solution here


function theBeatlesPlay(musicians, instruments) {
  var finalarray = [];
  
  
  
  for (var i = 0; i < musicians.length; i++) {
    finalarray.push(musicians[i] + " plays " + instruments[i]);
  }
  return finalarray;
}


function johnLennonFacts(facts) {
  var finalarray = [];
  
  var i = 0
  while (i < facts.length) {
    finalarray.push(facts[i] + "!!!");
    i++
  }
  return finalarray;
}



function iLoveTheBeatles(number) {
var array = [];
do {
  array.push("I love the Beatles!");
  number += 1
}
while (number < 15);
return array;
}



