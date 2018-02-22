function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  var newArray = [];
    for (var i = 0; i< arrayOfMusicians.length; i++)  {
      newArray.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]);
    }
  return newArray;
}

function johnLennonFacts(arrayOfFacts){
  var finalArray = [];
  var i = 0;
  for(i = 0; i< arrayOfFacts.length; i++)   { 
    finalArray.push(arrayOfFacts[i] + "!!!");
  }
  return finalArray;
}

function iLoveTheBeatles(num){
  var array  = [];
  do  {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return array;
}