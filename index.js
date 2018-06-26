//create a function theBeatlesPlay()
//1. Accepts two parameters-an array of musicians and an array of instruments
//2. Creates an empty array, stored in a variable
//3. Contains a forLoop that loops over the musicians/instruments and stores in
//empty array.
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < 4; i++) {
  newArray.push(musicians[i] + " plays " + instruments[i]);
}
  return newArray;
}


//create a function johnLennonFacts()
//1. accepts one argument-an array of facts.
//2. Use a whileLoop to add "!!!" to end of each fact.
//3. return an array of strings with exclamation points.

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
    var newFacts = [];
    for (let i = 0; i < facts.length; i++){
    newFacts.push(facts[i] + "!!!")
  }
  var facts = newFacts
  return facts;
}

//create a function iLoveTheBeatles()
//1. Accepts a number as a parameter
//2. create a variabe that stores an empty array
//3. implement a doWhile loop that adds "I love the Beatles!" to empty array
//4. loop increments number passed in as a parameter
//5. condition of loop should check that the parameter number is <15
//6. function should return array with strings "I love the Beatles!"

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
	num++;
  }
  while(num < 15);

  return array;
}
