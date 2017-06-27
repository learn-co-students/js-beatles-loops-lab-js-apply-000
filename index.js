function theBeatlesPlay(musicians,instruments) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var theBand = [];
  for (var i = 0; i < musicians.length; i++) {
    theBand[i] = (musicians[i] + " plays " + instruments[i]);
  }
  return theBand
}

var facts = ["He was the last Beatle to learn to drive",
             "He was never a vegetarian",
             "He was a choir boy and boy scout",
             "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var theFacts = [];
  var i = 0;
  while (i < facts.length) {
      theFacts.push (facts[i] + "!!!");
      i++;
    }
   return theFacts;
}

function iLoveTheBeatles(number) {
  var theTimes = [];
  do {
    theTimes.push("I love the Beatles!");
    number++;
} while (number < 15);
  return theTimes;
}
