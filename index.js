// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
const num = 7;

function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for (var x = 0; x < musicians.length; x++) {
        output.push(musicians[x] + " plays " + instruments[x]);
      }
  return output;
}

function johnLennonFacts(facts) {
  var output = [];
  var x = 0;
  while (x < facts.length) {
    output.push(facts[x] + "!!!");
    x++;
  }
  return output;
}

function iLoveTheBeatles(num) {
  var output = [];
  do {
    output.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return output;
}
