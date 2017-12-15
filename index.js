function theBeatlesPlay (musicians, instruments) {
  
  var beatlesArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    
    beatlesArray.push(musicians[i] + " plays " + instruments[i])
    
  }
  
  return beatlesArray;
}

function johnLennonFacts(facts) {
  
  var factsArray = [];
  var counter = 0;
  
  while (counter < facts.length) {
    
    factsArray.push(facts[counter] + "!!!")
    counter++;
    
  }
  
  return factsArray;
}

function iLoveTheBeatles(num) {
  
  var array = [];
  
  if (num > 15) {
    
    array = ["I love the Beatles!"];
    
  } else {
  
    do {
    
      array.push("I love the Beatles!");
      num --;
    
    } while (num >= 0);
  
  }

return array;
  
}



