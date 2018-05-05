var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) { 
  emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  
}  
  return emptyArray;  
}

function johnLennonFacts(facts){
  var factsArray = [];
  var i = 0;
  while (i < facts.length){
    factsArray.push(facts[i] + "!!!");
    i++;
  }
  return factsArray;
}


function iLoveTheBeatles(number) { 
  var newArray = []; 
  do {
   newArray.push(`I love the Beatles!`); 
   number++; 
 } 
  while (number < 15); 
  return newArray;  
  
} 

