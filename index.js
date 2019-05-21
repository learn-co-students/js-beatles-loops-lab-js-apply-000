// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
function theBeatlesPlay(musicians, instruments){
  var x = [ ];
  var i;
  for(i = 0; i < 4; i++){
    x[i] = musicians[i] + " plays " + instruments[i];
  }
  
  return x
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
var x = [ ];
var i = 0;
while (i < facts.length){
    x[i] = facts[i] + "!!!";
    i++;
}
  return x;
}

var n = 6;
function iLoveTheBeatles(n){
  var x = [ ];
  var i = 0;
  do{
    x[i] = "I love the Beatles!";
    i++;
    n++;
  }while(n<15);
  
  return x;
}



