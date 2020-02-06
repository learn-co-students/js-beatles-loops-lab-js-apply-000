function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  for(var i = 0; i < musicians.length; i++){
    var newString = musicians[i] + " plays " + instruments[i];
    newArray.push(newString);
  }
  
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var newArray = [];
  
  while(i < facts.length){
    newArray.push(facts[i] + "!!!");
    i++;
  }
  
  return newArray;
}

function iLoveTheBeatles(number){
  var newArray = [];
  var i = number;
  
  do{newArray.push("I love the Beatles!"); i++;}
  while(i<15);
  
  return newArray;
}