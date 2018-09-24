// add solution here
function theBeatlesPlay(musicians, instruments) {
  var i = 0;
  var results = [];
  
  while (i < 4) {
    results[i] = musicians[i].toString() + " plays " + instruments[i].toString();
    i++;
  }
 
  return results;
  
}

function johnLennonFacts(facts) {
  var i = 0;
  var results = [];
  
  while (i < facts.length) {
    results[i] = facts[i].toString() + "!!!";
    i++;
  }
  
  return results;
  
}

function iLoveTheBeatles(num) {
  var i = 0;
  var results = [];
  
  do {
    results[i] = "I love the Beatles!";
    i++;
  } while (i < num + 1 && num < 15);
  
  return results;
  
}