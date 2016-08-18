function theBeatlesPlay(musicians, instruments){
  var arrayLength=musicians.length;
  var playingArray=[];
  for(var i=0;i<arrayLength;i++){
    playingArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return playingArray;
}

function johnLennonFacts(facts){
  var arrayLength=facts.length;
  var newFacts=[];
  for(var i=0;i<arrayLength;i++){
    newFacts.push(facts[i]+"!!!");
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var iterations=n%15;
  var newArray=[];
  do {
        newArray.push("I love the Beatles!");
        n++
  }
  while (n<15);

  return newArray;
}
