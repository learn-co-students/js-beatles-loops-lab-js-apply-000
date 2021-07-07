// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var myString = musicians[i] + " plays " + instruments[i];
    myArray.push(myString);
  }
  
  return myArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(numIn) {
  var myArray = [];
  
  do {
    myArray.push("I love the Beatles!");
    numIn++;
  }
  
  while (numIn < 15);
  
  return myArray;
  
}