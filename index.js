const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  console.log("beatles");
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    var combo = musicians[i] + " plays " + instruments[i];
    players.push(combo)
  }
  console.log(players);
  return players
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  var i = 0;
  var changedFacts = []
  while (i < facts.length) {
    console.log(facts[i] + "!!!");
    changedFacts.push(facts[i] + "!!!");
    i++;

  }
  return changedFacts
}

function iLoveTheBeatles(n) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    n++;   // n = n + 1;
  }
  while (n < 15);
  return beatles 
}
