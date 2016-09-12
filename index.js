const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var description = [];

  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    description.push(string);
  }

  return description;
}

const facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var exclaimed = [];

  var i = 0;
  while (i < facts.length) {
    exclaimed.push(facts[i] + "!!!");
    i++;
  }

  return exclaimed;
}

function iLoveTheBeatles(num) {
  var exclamations = [];
  var counter = num;

  do {
    exclamations.push("I love the Beatles!");
    counter++;
  } while (counter < 15);

  return exclamations;
}
