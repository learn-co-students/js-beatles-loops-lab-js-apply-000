function theBeatlesPlay(ar,arI){
  var emptyArray = [];
  for(var i = 0; i < ar.length; i++){
    emptyArray[i] = ar[i] + " plays " + arI[i];
  }
  return emptyArray;
}

function johnLennonFacts(fact){
  for(var i = 0; i < fact.length; i++){
    fact[i] = fact[i] + "!!!";
  }
  return fact;
}
function iLoveTheBeatles(num){
  var emptyArray = [];
var i = 0;
  do{
    emptyArray[i] = "I love the Beatles!";



  num++;
  i++;
  }while (num < 15);

  return emptyArray;
}
