function theBeatlesPlay(musicians, instruments){
 var result = [];
 
 for(var i=0;i<musicians.length;i++){
   result[i]=musicians[i] + " plays " + instruments[i];
 }

  return result;
}

function johnLennonFacts(facts){
  var result = [];
  var i=0;
  while(i<facts.length){
    result[i]=facts[i]+"!!!";
    i++;
  }
  return result;
}

function iLoveTheBeatles(times){
  var result=[];

  do{
    result.push("I love the Beatles!");
    times++;
  }while(times<15)
  
  return result;
}