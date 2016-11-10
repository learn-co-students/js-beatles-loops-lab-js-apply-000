function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length; i++)
    newArray[i] = musicians[i] + " plays " + instruments[i];
    return newArray;
}

function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(int) {
  var empty = [];
  let i = 0;
  do {
    empty[i] = "I love the Beatles!"
    i++;
  } while(i <= int && int < 15);
  return empty;
}
