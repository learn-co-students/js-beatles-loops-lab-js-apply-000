// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var n = 0; n < musicians.length; n++) {
    emptyArray.push(musicians[n] + " plays " + instruments[n]);
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var results = [];
  var n = 0;
  while (n < facts.length) {
    results.push(facts[n] + "!!!");
    n++
  }
  return results;
}

function iLoveTheBeatles(n) {
  var loveDeclaration = [];
  do {
    loveDeclaration.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return loveDeclaration;
}
