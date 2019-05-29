function theBeatlesPlay (musicians, instruments) {
  var plays = [];
  for (var i = 0; i< musicians.length; i++) {
    plays.push(musicians[i] + " plays " + instruments[i])
  }
  return plays;
}

function johnLennonFacts (facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!"
    counter++;
  }
  return facts;
}

function iLoveTheBeatles (num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++
  }
  while (num < 15);
  return array;
}