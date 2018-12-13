function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  var arr = [];
  var length = arrayOfMusicians.length;
  for(var i = 0; i < length; i++){
    arr[i] = arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]
  }
  return arr;
}

function johnLennonFacts(arrayOfFacts){
  var arrFacts = [];
  var l = arrayOfFacts.length;
  var i = 0;
  
  while(i < l){
    arrFacts[i] = arrayOfFacts[i] + "!!!";
    i++;
  }
  return arrFacts;
}

function iLoveTheBeatles(n){
  var arr = [];
  var i = n;
  
  do{
    arr.push("I love the Beatles!") ;
    n++;
  }
  while(n<15);
  return arr;
}
