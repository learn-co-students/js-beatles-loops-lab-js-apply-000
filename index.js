// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians,  instruments) {
  var sentence = [];
  for(var i = 0; i < musicians.length; i++){
    sentence[i] = musicians[i] + " plays " + instruments[i];
  }
  return sentence;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var sentence = [];
  var i = 0;
  while(i < facts.length){
    sentence[i] = facts[i] + "!!!";
    i++
  }
  return sentence
  
}

function iLoveTheBeatles(x){
  var sentence = [];
  var i = 0
  do{
    sentence[i] = "I love the Beatles!";
    i++
  } while (x < 15 && i <= x);
  return sentence;
}

