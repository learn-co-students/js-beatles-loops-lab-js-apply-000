// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBand = [];
  var whatTheyPlay = ""
  for (var i = 0; i < musicians.length; i++) {
    whatTheyPlay = musicians[i] + " plays " + instruments[i];
    theBand.push(whatTheyPlay)
  }
  return theBand;
}

function johnLennonFacts(facts) {
  var surprisingFacts = [];
  var theFacts = "";
  var i = 0;
  while (i < facts.length) {
    theFacts = facts[i] + "!!!";
    surprisingFacts.push(theFacts);
    i++;
  }
  return surprisingFacts;
}

function iLoveTheBeatles(num) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    num++
  } while (num < 15)
  return myArray;
}