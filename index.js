// add solution here
function theBeatlesPlay(musicians, instruments) {
  var description = []; 
  
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    description.push(string);
  }
  
  return description;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  
  while(i < facts.length) {
    newFacts.push(facts[i].concat("!!!"));
    i++;
  }
  
  return newFacts;
}

function iLoveTheBeatles(n) {
  var exclamations=[];
  
  do {
    exclamations.push("I love the Beatles!");
    n++;
  }
  while ( n < 15);
  
  return exclamations;
}