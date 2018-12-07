var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay() {

var emptyArray = [];
  
  for(var i = 0; i < musicians.length; i++) {
    
    emptyArray.push(musicians[i] + " plays " + instruments[i]);


    
  }
  
  return emptyArray
  
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts) {
  
var emptyArray = [];
  
  var i = 0;
  
  while(i < facts.length) {
    
emptyArray.push(facts[i] + "!!!");

    i++;
    
  }

return emptyArray;
  
}


function iLoveTheBeatles(number) {
  
  var i = number
  
  var emptyArray = []
  
  do {
    
    emptyArray.push("I love the Beatles!");
    
    i++
    
  }
  
  while (i < 15) {
    
    return emptyArray
  }
  
}