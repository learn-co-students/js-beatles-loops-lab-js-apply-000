const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  //creates empty array for strings about band members
  var aboutBeatles = [];
  
  for (var i = 0; i < musicians.length; i++) {
    //.push() adds string in to aboutBeatles array
    aboutBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return aboutBeatles;
}

//The following loop adds !!! to the end of fact and places it in a new array
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout", 
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var i = 0;
  var jLFacts = [];
  while (i < facts.length) {
    jLFacts.push(`${facts[i]}!!!`);
    i++;
  }
 return jLFacts;
}

function iLoveTheBeatles(number) {
  var beatleLove = [];
  
  do {
    beatleLove.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return beatleLove;
}

iLoveTheBeatles(17)
