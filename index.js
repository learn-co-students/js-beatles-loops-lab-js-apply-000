function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for (var i = 0; i < musicians.length; i++) {
      output[i] = musicians[i] + " plays " + instruments[i];
  }

  return output;
}

function johnLennonFacts(facts){
  var modifiedFacts = [];

  var i = 0;
  while (i < facts.length) {
    modifiedFacts[i] = facts[i] + "!!!";
    i++;
  }
  return modifiedFacts;
}

function iLoveTheBeatles(param) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    param++;
  } while (param < 15);
  return array;
}
