// add solution here

function theBeatlesPlay(musicians, instruments){
  var empArray = [];
  for(var i = 0; i < musicians.length ; i++){
    empArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return empArray;
}

function johnLennonFacts(facts){
  var i = 0;
  //empArray2 = facts;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(a){
  var empArray3 = [];
  var count = 0;
  
  if(a > 15){
    count = 15;
  }
  
  do{
      empArray3.push("I love the Beatles!");
      count ++;
  }
  while(count <= a && count < 15)
  
  return empArray3;
}