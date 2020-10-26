
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments){
  var musicianString;
  var musicianInstrument = []; 
  for (var i = 0; i< musicians.length; i++) {
    musicianString = musicians[i] + ` plays ` + instruments[i];
    musicianInstrument[i] = musicianString
  }
  return musicianInstrument;
}

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a chois boy and boy scout",
    "He hated the sound of his own voice"];
function johnLennonFacts(facts){
    let i = 0
    let newArray = [];
    while (i < facts.length) {
      newArray.push(`${facts[i]}` + `!!!`);
    i++;
    }
    return newArray
}

function iLoveTheBeatles(n){
  var strings = [];
  do {n++;
  strings.push(`I love the Beatles!`);
  } 
  while(n < 15);
  return strings
}