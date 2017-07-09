function theBeatlesPlay(musicians, instruments){
  var box = [];
  for(var i = 0; i < musicians.length; i++){
    box.push(musicians[i] +" plays " + instruments[i]);
  }
  return box;
}

function johnLennonFacts(facts){
  var newFact = [];
  var i = 0;
  while(i < facts.length){
    newFact.push(facts[i] + "!!!");
    i++;
  }
  return newFact;
}

function iLoveTheBeatles(num){
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return empty;
}
