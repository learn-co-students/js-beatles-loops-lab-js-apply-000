// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  
  for (let i = 0; i < musicians.length; i++) {
    theBeatlesPlay.push(musicians[i] + " " + "plays" + " " + instruments[i]);
  }
  return theBeatlesPlay
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0;
  var johnLennonFacts = [];
  while (facts[i]) {
    johnLennonFacts.push(facts[i] + "!!!");
    i++;
  }
  return johnLennonFacts
}

let x = 7;
function iLoveTheBeatles(x) {
  var iLoveTheBeatles = [];
  do {
  iLoveTheBeatles.push("I love the Beatles!");
  x++;
} while (x < 15);
return iLoveTheBeatles;
}