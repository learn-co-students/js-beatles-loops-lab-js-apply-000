// add solution here

 
function theBeatlesPlay(musicians,instruments){
  
  var resultArr=[]; 
  
  for(var i=0;i<musicians.length;i++){
    resultArr[i]=musicians[i]+" plays "+instruments[i];
  }
  
  return resultArr;
}

function johnLennonFacts(facts){
  
  var i=0;
  
  while (i < facts.length) {
    facts[i] +=  "!!!";
   
}

return facts;
  
}