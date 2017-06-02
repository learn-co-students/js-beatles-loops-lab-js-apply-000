function theBeatlesPlay(musicians, instruments) {
  var i;
  var loop = [];
  for (i = 0; i < musicians.length; i++) {
    loop.push(musicians[i] + " plays " + instruments[i]);
  }
  return loop;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (newFacts.length < facts.length) {
    newFacts.push(facts[i] += "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    number = number + 1;
  } while (number < 15);
  return beatles;
}

/*function iLoveTheBeatles(number) {
  var beatles = [];
  var i = -1;
  while (i < number) {
    beatles.push("I love the Beatles!");
    i++;
  }
  return beatles
} */
