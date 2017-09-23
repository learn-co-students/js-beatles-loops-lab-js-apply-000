function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var num = 0;
  while (num < facts.length) {
    newFacts.push(facts[num] + "!!!");
    num++;
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return array
}
