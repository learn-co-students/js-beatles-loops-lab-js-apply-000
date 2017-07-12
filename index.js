function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  var i = 0;
  for (i=0; i<musicians.length; i++){
    newArray.push(musicians[i]+" plays "+instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts){
  var i = 0;
  while (i<facts.length) {
    facts[i]= facts[i] + "!!!"
    i++;
  }
  return facts;
}


function iLoveTheBeatles (number){
  var nextArray = [];
  do{
    nextArray.push("I love the Beatles!")
    number++;
  }
while(number<15);
return nextArray;
}
