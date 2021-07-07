function theBeatlesPlay(musicians, instruments){
  var musicians_instruments = [];
  for (var i=0;i<musicians.length;i++){
    musicians_instruments[i] =  musicians[i] + " plays " + instruments[i];
  }
  return musicians_instruments;
  
}

function johnLennonFacts(johnFacts){
  var johnFacts_2 = [];
  var i=0;
  while(i<johnFacts.length){
    johnFacts_2[i] = johnFacts[i] + "!!!";
    i++;
  }
  return johnFacts_2;
}

function iLoveTheBeatles(counter){
  var loveTheBeatles = [];
  var i = 0;
  do{
    loveTheBeatles[i] = "I love the Beatles!"
    i++;
    counter++;
  }while(counter<15);
  return loveTheBeatles;
}