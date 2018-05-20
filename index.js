function theBeatlesPlay(musicians, instruments){
  var playArray = [];
  for(var i = 0; i < musicians.length; i++){
    var temp = musicians[i] + " plays " + instruments[i];
    playArray[i] = temp;
  }
  return playArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  if (n >= 15){
    return "I love the Beatles!";
  }
  var beatlesLoveArray = [];
  var i = 0;
  do{
    beatlesLoveArray.push("I love the Beatles!");
    i++;
  }
  while(i <= n);
  return beatlesLoveArray;
}
