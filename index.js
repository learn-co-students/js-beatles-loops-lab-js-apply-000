// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (var i=0; i<musicians.length; i++) {
    band.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return band;
}

 const facts = [ 
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var nextFact = [];
  var i = 0;
  while (i<facts.length) {
    nextFact.push(facts[i] + "!!!");
    i++;
  }
  return nextFact;
}


var iLoveTheBeatles = function(num) {
  var heyJude = [];
  do {
    heyJude.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return heyJude
}
  

