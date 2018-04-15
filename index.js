function theBeatlesPlay(musicians, instruments){
var arrayLength = musicians.length;
var returnArray = [];
for (var i = 0; i < arrayLength; i++) {
    returnArray.push(musicians[i]+" plays "+instruments[i]);
}
return returnArray
}

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i]=facts[i]+"!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(num){
  var returnArray = [];
  do{
    returnArray.push("I love the Beatles!");
    num++;
  }
  while(num<15);
  return returnArray
}