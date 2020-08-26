// add solution here
function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  
  for(var i = 0; i < musicians.length; i ++) {
   arr.push(musicians[i] + " plays " + instruments[i]) ;
  }
  
  return arr;
}

function johnLennonFacts(facts) {
  
const arr = [];

var i = 0;

while(arr.length < facts.length) {
 arr.push(facts[i] + '!!!') 
 
 i ++
}

return arr;
}

function iLoveTheBeatles(number) {
  const arr = [];
  
  do {
    arr.push("I love the Beatles!");
    number += 1
  } while (number < 15) {
    return arr;
  }
  
}