function theBeatlesPlay(musicians, instruments) {
  
  var arr1 = [];
  for(var i=0; i < musicians.length; i++) {
    arr1.push(musicians[i] + " plays " + instruments[i]);
    }
    
    return arr1;
}

function johnLennonFacts(facts) {
  
  var arr1 = [];
  var i = 0;
  
  while (i < facts.length) {
    arr1.push(facts[i] + "!!!")
    i++; 
  }
  
  return arr1;
}

function iLoveTheBeatles(number) {
  
  var arr1 = [];
  var i = 0;
  
  do {
    arr1.push("I love the Beatles!")
    number++;
  } 
  while (number < 15);
  
  return arr1;
  
}