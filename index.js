// add solution here
var counter = 0;

function theBeatlesPlay(musicians, instruments) {
  var facts = [];
  for (var musician=0; musician < musicians.length; musician++) {
    var fact = musicians[musician] + " plays " + instruments[musician];
    facts.push(fact);
  } 
  return facts;
}

function johnLennonFacts(lennonFacts){
  var coolFacts = [];
  var fact = 0;
  while (fact < lennonFacts.length) {
    var coolFact = lennonFacts[fact] + "!!!";
    coolFacts.push(coolFact);
    fact++
  }
  return coolFacts;
}

function iLoveTheBeatles(howMuch) {
  var screams = [];
  var i = 0;
  var limit = 15;
  var howMany = limit - howMuch
  do {
    screams.push("I love the Beatles!");
    i++;
  }
  while (i < howMany);
  return screams;
}