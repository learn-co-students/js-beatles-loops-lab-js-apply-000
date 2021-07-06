var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
var refmusician = [];
for (var i=0; i < musicians.length; i++) {
refmusician.push(`${musicians[i]} plays ${instruments[i]}`);
}
return refmusician;
}

function johnLennonFacts(facts) {
  var excitingFacts = []
  var i = 0;
  while (i < facts.length) {
 facts[i] = facts[i] + "!!!";
  i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var showlove = []
  do {
    showlove.push ('I love the Beatles!');
number ++;}
while (number < 15);
return showlove
}
