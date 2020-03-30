// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var final = [];

function theBeatlesPlay(arrayOne, arrayTwo) {
  for(var i = 0; i < 4; i++) {
    var newSentence = `${musicians[i]} plays ${instruments[i]}`;
    final.push(newSentence);
  }
  return final;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {

  var excitingFacts = [];
  var i = 0;

  while(i < facts.length) {
    excitingFacts.push(facts[i] + "!!!");
    i++;

  }
  return excitingFacts;
}

function iLoveTheBeatles(num) {
  var finalArray = [];
  var i = 0;
  var diff = 15 - num;
  
  do {
    finalArray.push('I love the Beatles!')
    i++;
    
  } while(i < diff);
  
   return finalArray;

}




