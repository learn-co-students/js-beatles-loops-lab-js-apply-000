
// This says that this function looks at musicians and instruments (two arrays)
// and creates a new array
// then it iterates through each array
// then combines the indexes and the text plays
// into the new array as musicians[1] + "plays" instruments[1]
function theBeatlesPlay(musicians, instruments) {
  var combinedStuff = [];
  for (var i=0; i < musicians.length; i++) {
    combinedStuff.push(musicians[i] += " plays " + instruments[i]);
  }
  return combinedStuff;
}


function johnLennonFacts(facts) {
  var factual = [];
  var i = 0;
  while (i < facts.length) {
    factual.push(facts[i] + "!!!");
    i++;
  }
  return factual;
}


function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return array;
}
