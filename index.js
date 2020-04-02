const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]; //"John Lennon plays guitar"

function theBeatlesPlay(musicians, instruments) {
  var musiciansPlays = [];
  
  for (var i = 0; i < musicians.length; i += 1) {
    var musicians1 = musicians[i];
    var instruments1 = instruments[i];
    var sentence = musicians1 + " plays " + instruments1
    musiciansPlays.push(sentence);
  }
  return musiciansPlays;
}


const facts = [
  "He Was Legally Blind",
  "We Don't Know Where His Ashes Are",
  "He Was Raised By His Aunt",
  "He Wanted To Write A Children's Book"
];

function johnLennonFacts (facts) {
  var newFacts = [];
  var i = 0;
  
  while (i < facts.length) {
    var factsSent = facts[i];
    newFacts.push(factsSent + "!!!");
    
    i += 1;
  }
  
  return newFacts;
}

function iLoveTheBeatles(number) {
  const array = []

  do {
    array.push('I love the Beatles!')
    number++
  } while (number < 15)

  return array;
}
