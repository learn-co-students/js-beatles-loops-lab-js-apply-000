// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  
var i;
var index = 4;
var emptyArray = [];
  
for (i = 0; i < index; i++) {
  emptyArray.push(musicians[i] + " plays " + instruments[i]);    
 }
return emptyArray;
}

const facts = ["He was the last Beatle to learn to drive", 
               "He was never a vegetarian",
               "He was a choir boy and boy scout",
               "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  
var i = 0;
var newArray = [];

while (i < facts.length) {
  newArray.push(facts[i] + "!!!");
  i++;
  }
return newArray;  
}

var num1 = 0;

function iLoveTheBeatles(num1) {
  
  var emptyArray = [];
  
  do {
    emptyArray.push("I love the Beatles!");
    num1++;
  } while (num1 < 15)
return emptyArray;
}
