function theBeatlesPlay(arrMusicians, arrInstruments){
  var tempArray = [];
  
  var i = 0;
  
  for(i = 0; i < arrMusicians.length; i++){
      tempArray[i] = arrMusicians[i] + " plays " + arrInstruments[i];
  }
    
  return tempArray;
}

function johnLennonFacts(arrFacts){
  var i = 0;
  while(i < arrFacts.length){
    arrFacts[i] = arrFacts[i] + "!!!";
    i++;
  }
  return arrFacts;
}

function iLoveTheBeatles(num){
  var tempArray = [];
  
  do {
    tempArray.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  
  return tempArray;
}
