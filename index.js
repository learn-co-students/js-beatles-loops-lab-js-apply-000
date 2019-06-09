// add solution here

function theBeatlesPlay(musicians, instruments) {
  var output = [];
  
  for (var i = 0; i < musicians.length; i++) { 
    output.push(musicians[i] + " plays " + instruments[i]);
  }
  return output;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!";
  }
  
  return facts;
}

function iLoveTheBeatles(number) {
  var output = [];
  
  do {
    output.push("I love the Beatles!");
    number++;
  } while (number < 15);
  
  return output;
}