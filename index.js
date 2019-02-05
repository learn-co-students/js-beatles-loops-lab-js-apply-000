function theBeatlesPlay(musicians, instruments){
  var finalArray = [];
  for (var i = 0; i < musicians.length; i++) {
    finalArray[i] = (musicians[i]+" plays "+instruments[i]);
  }
return finalArray;
}

function johnLennonFacts(facts){
  var finalArray=[];
  let index = 0;
  while (index < facts.length){
    finalArray[index]=facts[index]+"!!!";
    index++;
  }
return finalArray;
}

function iLoveTheBeatles(number){
  var finalArray=[];
  var text="I love the Beatles!";
  var i=0;
  do {
    finalArray[i]=text;
    number++;
    i++;
  }
  while (number < 15)
  return finalArray;
}
