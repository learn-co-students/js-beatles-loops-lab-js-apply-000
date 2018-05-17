function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty[i] = musicians[i] + " plays " + instruments[i];
  }
  return empty;
}

function johnLennonFacts(facts){
  var i = 0;
  var jFacts = [];
  while (i < facts.length){
    jFacts[i] = facts[i] + "!!!";
    i++;
  }
  return jFacts;
}

function iLoveTheBeatles(num){
  var empty2 = [];
  do {
    empty2.push("I love the Beatles!");
    num++;
  }
  while (num < 15)
  return empty2;
}