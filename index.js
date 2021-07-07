// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  var i;
  for(i = 0; i < musicians.length; i++){
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  
  return newArray;
}

function johnLennonFacts(facts){
  var newArray = [];
  
  var i = 0;
  while(i < facts.length){
    newArray[i] = facts[i] + "!!!";
    i++;
  }
  
  return newArray;
}

function iLoveTheBeatles(number){
  var newArray = [];
  var i = 0;
  
  do{
    newArray[i] = "I love the Beatles!";
    i++;
    number++;
  }
  while(number < 15);
  
  return newArray;
}