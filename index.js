// add solution here

function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (var i=0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
} 

function johnLennonFacts(facts){
  var i=0;
  var factsArray = [];
  while(i < facts.length){
    factsArray.push(facts[i] + "!!!");
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(int){
  var array = [];
  do {
    array.push("I love the Beatles!");
    int++;
  }  
  while(int < 15);
  return array;
} 