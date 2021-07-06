// add solution here

const musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
];

const instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"
];

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    newArray.push(string);
  }
  return newArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var shoutedFacts = [];
  var i = 0;
  while (i < facts.length) {
    var shoutedFact = facts[i] + "!!!";
    shoutedFacts.push(shoutedFact);
    i++;
  }
  return shoutedFacts;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return emptyArray;
}
