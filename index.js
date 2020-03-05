// add solution here

    
var theBeatlesPlay = function (musicians, instruments) {
  
  var inputs = [];
  
  for (var i=0; i < musicians.length; i++) {
    inputs.push(musicians[i] + " plays "  + instruments[i]);
  }
  
  return inputs;
}

var johnLennonFacts = function(facts) {
  
  var i = 0;
  
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}


var iLoveTheBeatles = function(num) {
  
  var message = [],
      i = 0;
      
  do {
    message.push("I love the Beatles!");
    i++;
  } 
  while (i <= num && num < 15); 
  return message;
}