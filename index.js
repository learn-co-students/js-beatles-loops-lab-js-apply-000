function theBeatlesPlay(musicians, instruments) {
  var bandIfno = [];

  for (var i = 0; i < musicians.length; i++) {
    bandIfno.push(musicians[i] + " plays " + instruments[i]);
  }

  return bandIfno;
}

function johnLennonFacts(facts) {
  var excitingFacts = [];
  var i = 0;

  while(i < facts.length) {
    excitingFacts.push(facts[i] + "!!!");
    i++;
  }

  return excitingFacts;
}

function iLoveTheBeatles(num) {
  var array = [];

  while(num < 15) {
    array.push("I love the Beatles!");
    num++;
  }

  return array;
}
