function theBeatlesPlay(musicians, instruments){
  var toReturn = [];
  for(var i = 0; i < musicians.length; i++){
    toReturn[i] = musicians[i] + " plays " + instruments[i];
  }
  return toReturn;
}

function johnLennonFacts(factArray){
  var toReturn = [];
  var i = 0;
  while(i < factArray.length){
    toReturn[i] = factArray[i] + "!!!";
    i++;
  }
  return toReturn;
}

function iLoveTheBeatles(numParam){
  var toReturn = [];
  do{
    toReturn.push("I love the Beatles!");
    numParam ++;
  }
  while(numParam < 15);
  
  return toReturn;
}