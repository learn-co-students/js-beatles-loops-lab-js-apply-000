function theBeatlesPlay(musicians, instruments) {
  var theyPlay = [];
  for (let i = musicians.length; i > 0; i--) {
    theyPlay.unshift(musicians[i-1] + " plays " + instruments[i-1])
  }
  return theyPlay
}

function johnLennonFacts(facts) {
  var factsExclamation = [];
  var length = facts.length;
  var n = 0;
  while (length > n) {
    factsExclamation.push(facts[n] + "!!!");
    n++
  }
  return factsExclamation;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {array.push ("I love the Beatles!");
  number++;
  }
  while (number < 15);
  return array;
}
