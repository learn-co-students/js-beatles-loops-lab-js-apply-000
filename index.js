/* add solution here*/
const muscians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(muscians, instruments) {
  var band = [];
  for (var i=0; i< muscians.length; i++){
    band.push(muscians[i]  +" plays " +  instruments[i] );
  }
  return band;
}
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(factsArray) {
  var i = 0;
  var arrayCounter = factsArray.length;
  var newFactsArray = [];
 
  while (arrayCounter > 0){
    newFactsArray.push(factsArray[i] + "!!!");
    i++;
    arrayCounter--;
  }
  return (newFactsArray);
}

johnLennonFacts(facts) 


function iLoveTheBeatles(num){
  var amor = [];
  do {
    amor.push("I love the Beatles!");
    num++;
  } while (num < 15);
   return amor;
}

