// add solution here
function theBeatlesPlay(musicians, instruments) {
  
  var counter = musicians.length;
  var arr = [];
  for (var i = 0; i < counter; i ++) {
    
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return arr;
}

function johnLennonFacts(facts) {
  
  var arrLen = facts.length;
  var counter = 0;
  var exclamations = [];
  
  while(counter < arrLen) {
    
    exclamations.push(facts[counter] + "!!!");
    counter ++;
  }
  
  return exclamations;
}

function iLoveTheBeatles(num) {
  
  var i = 0;
  var arr = [];
  
  do {
    
    arr.push("I love the Beatles!");
    num ++;
  } while (num < 15);
  
  return arr;
}