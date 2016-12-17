function theBeatlesPlay(musicians, instruments){
  var array = musicians;
  for (var i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(facts){
  var counter = 0;
  var exclaim = facts;
  while (counter < facts.length) {
    exclaim[counter] = facts[counter] + "!!!";
    counter++;
  }
  return exclaim;
}

function iLoveTheBeatles(n) {
  var array = [];
  var counter = 0;
  if (n > 15) {
    return ["I love the Beatles!"]
  }
  do {
    array[counter] = "I love the Beatles!"
    counter++;
  } while ( counter < (n+1) )
  return array;
}
