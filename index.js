  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  const jlFacts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ];

// add solution here
function theBeatlesPlay(musicians, instruments) {
  var x = [];
  
  for (var i = 0; i < musicians.length; i++) {
    x[i] = musicians[i] + " plays " + instruments[i];
  }
  return x;
}

function johnLennonFacts(jlFacts) {
  var i = 0;
  var x = [];
  
  while(i < jlFacts.length) {
    x[i] = jlFacts[i] + "!!!";
    i++;
  }
  
  return x;
}

function iLoveTheBeatles (num) {
  var x = [];
  var i = 0;
  
  do {
    x[i] = "I love the Beatles!"
  }
  while(num < 15)
}