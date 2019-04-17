var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var empty = [];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments){
  for(var i=0; i<musicians.length; i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts){
  var counter=0;
  var newFacts = [];
  while(counter<facts.length){
    newFacts.push(facts[counter]+ "!!!");
    counter++;
  }
    return newFacts;
}

function iLoveTheBeatles(num){
  var counter=num;
  var empty2 = [];
  do{
    empty2.push("I love the Beatles!");
    counter++;
  }while(counter<15);
  return empty2;
}