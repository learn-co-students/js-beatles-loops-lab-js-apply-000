

function theBeatlesPlay(musicians, instruments){
  var i =0;
  var result =[];
  for(;musicians[i];i++){
    result[i] =musicians[i] + " plays " + instruments[i];

  }
  //console.log(result);
  return result;
}


function johnLennonFacts (facts){
  var result = [];
  var i =0;
  while(facts[i]){
    result[i] = facts[i] + "!!!";
    i++;
  }
  return result;
}


function iLoveTheBeatles(deep){
  var result =[];
  var i =0;
  do{
    result[i] = "I love the Beatles!";
    i++;
  }while(i <= deep && deep < 15);
  return result;

}
