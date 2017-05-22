function theBeatlesPlay() {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var beatlesInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    let musicianInstruments = musicians[i] + " plays " + instruments[i];
    beatlesInstruments.push(musicianInstruments);
  }
  return beatlesInstruments;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
var counter = 0;
while (counter < facts.length) {
  facts[counter] = facts[counter] + "!!!";
  counter++;
}
return facts;
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    num++;
  }
    while( num <15); 
        return beatlesLove;
  }

