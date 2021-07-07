//set array values
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) {
  var theBeatlesSentences = [];
  var i;
  
  for (i = 0; i < 4; i++) {
    theBeatlesSentences[i] = musicians[i] + " plays " + instruments[i];
  }
  
  return theBeatlesSentences;

}


var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles (num) {
  var loveNotes = [];
  var i = 0;
  do {
    loveNotes[i] = "I love the Beatles!";
    num++;
    i++;
  }
  while (num < 15);
  return loveNotes;
}
