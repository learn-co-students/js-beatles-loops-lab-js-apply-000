function theBeatlesPlay(musicians,instruments){
  var returnArray =[];
  
  for (var i = 0; i < musicians.length; i++){
    returnArray.push(musicians[i] +' plays '+ instruments[i]);
  }
  return returnArray
}

function johnLennonFacts(facts){
  var returnArray=[];
  var i = 0;
  while(i < facts.length){
    returnArray.push(facts[i]+"!!!");
    i++;
  }
  return returnArray;
}
function iLoveTheBeatles(number){
  var theBeatle=[];
  if(number < 17){
    do{
      theBeatle.push("I love the Beatles!");
    }
    while(theBeatle.length - 1 < number)
  }
  else theBeatle.push("I love the Beatles!");
  
  return theBeatle;
}
