function theBeatlesPlay(instrument, musician) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var instrumentPlayed = [];
    for (var i = 0; i < musicians.length; i++) {
        instrumentPlayed.push(musicians[i] + " plays " + instruments[i]);
    }
    return instrumentPlayed;
}

function johnLennonFacts(facts) {
  var emptyArray = [];
  var i = 0;
  while (i < facts.length) {
    emptyArray.push(facts[i] + "!!!")
    i++;
  }
  return emptyArray;
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    num++
  } while (num < 15);
  return emptyArray;
}