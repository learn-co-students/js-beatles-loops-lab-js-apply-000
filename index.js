// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesStr = [];
  
  for(var i = 0; i < musicians.length; i++){
    beatlesStr.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesStr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var factStr = [];
  var i = 0;
  while (i < facts.length){
    factStr.push(facts[i] + "!!!")
    i++;
  }
  return factStr;
}

function iLoveTheBeatles(n){
  var numberArray = [];
  do{
    numberArray.push("I love the Beatles!");
    n++;
}
while (n < 15);
return numberArray;
}