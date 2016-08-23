function theBeatlesPlay (musicians,instruments){
  var theArray = [];
  for (var i=0;i<musicians.length;i++){
    theArray[i]=musicians[i]+" plays " + instruments[i];
  }
  return theArray;
}

function johnLennonFacts (factsArray){
  var spitFacts = [];
  var i=0;
  while (i<factsArray.length){
    spitFacts[i] = factsArray[i]+"!!!";
    i++;
  }
  return spitFacts;
}

function iLoveTheBeatles(number){
  var yetAnotherArray = [];
  var i = 0;
  do{
    yetAnotherArray[i] = "I love the Beatles!";
    i++;
    number++;
  }while(number<15)
  return yetAnotherArray;
}
