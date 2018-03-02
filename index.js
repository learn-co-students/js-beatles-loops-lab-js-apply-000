var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "LeadGuitar", "Drums"];


function theBeatlesPlay(array1, array2) {
  var theBand = [];
  
  var string1 = " plays ";
  for(var i = 0; i < array1.length; i++) {
    theBand.push(array1[i] + string1 + array2[i]);
  }
  return theBand;
  
}

theBeatlesPlay(musicians, instruments);

const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var string = "!!!";
  var index = 0;
  var excitedFacts = [];
  while(index < facts.length) {
    excitedFacts.push(facts[index] + string);
    index++;
  }
  return excitedFacts;
}

johnLennonFacts(facts);

var num = 17;
var num2 = 7;

function iLoveTheBeatles(int) {
  var array = [];
  var string = "I love the Beatles!";
  
  do  {
    
    
    array.push(string);
    int++;
  } while(int < 15)
    
  return array;
}

iLoveTheBeatles(num);
iLoveTheBeatles(num2);