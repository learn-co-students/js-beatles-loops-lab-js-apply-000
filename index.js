// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = []
  for (var i = 0; i < musicians.length; i++) {
    
      arr.push(musicians[i] + " plays " + instruments[i])
     
    
  }
   return arr
}

function johnLennonFacts (facts) {
  var i = 0;
  var arr = []
  while (i < facts.length) {
    arr.push(facts[i] + "!!!")
    i++
  }
  return arr;
}

function iLoveTheBeatles (num) {
  var i = 0;
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    num++
  }
  while (num < 15);
  
  return arr;
}