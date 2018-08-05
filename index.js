const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay(musicians, instruments) {
  var bandPositions = [];
  var i;
  for (i=0; i < musicians.length; i++) {
    bandPositions.push(musicians[i] + " plays " + instruments[i]);
  }
  return bandPositions;
}

function johnLennonFacts(facts) {
  var exclaims = [];
  var i = 0;
  while (i < facts.length) {
    exclaims.push(facts[i] + "!!!");
    i++;
  }
  return exclaims;
}

function iLoveTheBeatles(x) {
  var crazyFanSays = [];
  do {
    crazyFanSays.push('I love the Beatles!');
    x++;
  }
  while (x < 15);
  return crazyFanSays;
}