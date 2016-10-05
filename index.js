function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var emptyArray = [];
  while (counter < facts.length) {
    emptyArray[counter] = facts[counter] + "!!!";
    counter++;
  }
  return emptyArray;
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return emptyArray;
}
