function theBeatlesPlay(musicians, instruments){
  var array = []
  var i;
  for(i=0; i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts){
  var arrayT = [];
  var i = 0; //initialization
  while(i<facts.length){ //condition
    arrayT.push(facts[i] + "!!!"); 
    i++; //iteration
  }
 return arrayT
}

function iLoveBeatles(n){//*initialization*
  var arrayA = [];
  do {
    arrayA.push('I love Beatles!');
    n++;//*iteration*
  } while (n < 15);//*condition*

 return arrayA;
}
