var beatles = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(beatles, instruments) {
  var strings = [];
  for (var i = 0; i < 4; i++){
    strings[i] = beatles[i] + " plays " + instruments[i];
  }
  return strings;
}

function johnLennonFacts(facts) {
  var n = 0;
  var strings = [];
  while ( n < facts.length){
    strings[n] = facts[n] + "!!!";
    n++;
  }
  return strings;
}
function iLoveTheBeatles(n) {
  var strings = [];
  do {
    if (n > 15){
        n = 0;
    }
    strings[n] = "I love the Beatles!"
    n--;
  } while (n >= 0);
  return strings;
}
