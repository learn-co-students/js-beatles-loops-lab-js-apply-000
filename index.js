const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
};

function iLoveTheBeatles(n) {
  var array = [];
  do {
   array.push("I love the Beatles!");
   n++;
 } while (n < 15);
 return array;
};

function johnLennonFacts(facts) {
  var i = 0;
  var happyFacts = [];
  while(i < facts.length) {
    happyFacts.push(facts[i] + "!!!");
    i++;
  }
  return happyFacts;
}
