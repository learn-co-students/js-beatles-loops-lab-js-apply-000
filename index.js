// add solution here
    
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const band = []; 
    
function theBeatlesPlay() {
	for(var counter = 0; counter <= 3; counter++) {
    band[counter] = ((musicians[counter]) + " plays " + (instruments[counter]));
  }
  return band;
}
theBeatlesPlay();

//const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var counter = 0; 
  while (facts[counter]) {
  facts[counter] = ((facts[counter]) + '!!!');
  counter++;
  }
  return facts;
}

//function should create a variable that stores an empty array 

//create a function iLoveTheBeatles which accepts a number as a parameter
function iLoveTheBeatles(num) {
  var arr = [];
//adds "I love the Beatles!" to the empty array
  do {
   arr.push("I love the Beatles!"); num++; 
    } while (num < 15);
    
//return the array with the strings "I love the Beatles!"
  return arr;
}