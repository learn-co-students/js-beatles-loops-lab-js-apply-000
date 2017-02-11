function theBeatlesPlay (musicians, instruments){
  var band = [];
    for(var i=0;i<musicians.length;i++){
      band[i]=musicians[i]+" plays "+instruments[i];
    }
    return band;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i=0;
  while (i<facts.length){
    newFacts[i]=facts[i]+"!!!";
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var loveArray = [];
  var i=0;
  do{
    loveArray[i]="I love the Beatles!"
    i++;
    n++;
  } while(n<15);
return loveArray;
}
