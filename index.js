// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  
function theBeatlesPlay(musicians, instruments){
  var bandMembers = [];
  
  for (var i=0; i < musicians.length; i++){
    bandMembers.push(musicians[i] + " plays " + instruments[i]);
  }
  return bandMembers;
}

var facts = [ "He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
  
function johnLennonFacts(facts) {
  
  var newFacts = [];
  var i = 0;
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  
  var string = [];
  do {
    string.push("I love the Beatles!");
    num += 1;
    
  }
  while (num < 15); 
  return string
}