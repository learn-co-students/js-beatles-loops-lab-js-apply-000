// add solution here
function theBeatlesPlay (arrayMusicians,arrayInstruments){
  var i = 0
  var array = []
  for (i = 0; i < arrayMusicians.length; i++){
    array.push(arrayMusicians[i] + " plays " + arrayInstruments[i]);
  }
  
  return array
}


function johnLennonFacts (arrayFacts){
  var arr = [];
  var i = 0;
  
  while (i < arrayFacts.length){
    arr[i] = arrayFacts[i] + "!!!";
    i++;
  }
  
  return arr;
}


function iLoveTheBeatles(number){
  var arr = [];
  var i = 0;
  var loveBeatles = "I love the Beatles!";
  
  do {
    arr.push(loveBeatles);
    i++;
  }
  while (i < (15 - number));
  
  return arr;
}