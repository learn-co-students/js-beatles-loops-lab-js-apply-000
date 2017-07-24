var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var theBeatlesPlay = function(musicians, instruments) {
  var musicNotes = [];
  for (var i = 0; i < musicians.length; i++) {
    var musicString = musicians[i] + ' plays ' + instruments[i];
    musicNotes.push(musicString);
  }
  return musicNotes;
}

theBeatlesPlay(musicians,instruments);

var johnLennonFacts = function(facts) {
  var i = 0;
  var updatedFacts = [];
  while (i < facts.length) {
    var newFacts = facts[i] + "!!!";
    updatedFacts.push(newFacts);
    i++;
  }
  return updatedFacts;
}

var iLoveTheBeatles = function(num) {
    var emptyArray = [];
    var i = 0;
    do {
      emptyArray.push('I love the Beatles!');
      num++;
    }
    while (num < 15) {
      return emptyArray;
    }
}
