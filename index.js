// add solution here



var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

//1. for loop



function theBeatlesPlay(musicians, instruments) {
  var theBand = []
  for (var i=0; i<musicians.length; i++) {
    theBand.push(musicians[i] + " plays " + instruments[i])
  }
  return theBand
};



//2. johnLennonFacts


var johnTrivia = ["While on tour, he enjoyed playing Monopoly",
"Harmonica was the first instrument Lennon learned to play"];

function johnLennonFacts(facts) {
  var i = 0
  var newArray = []
  while (newArray.length < facts.length) {
    newArray.push(facts[i] + "!!!")
    i++
  }

  return newArray
};

johnLennonFacts(johnTrivia);




//3. iLoveTheBeatles




function iLoveTheBeatles(n) {
  var fandom = []
  do {
    fandom.push("I love the Beatles!")
    n++
  } while (n < 15);

  return fandom
};

iLoveTheBeatles(7);
