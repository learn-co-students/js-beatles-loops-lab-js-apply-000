function theBeatlesPlay(musicians, instruments) {
  var theyPlay = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var sentence = musician + " plays " + instrument;
    theyPlay.push(sentence);
  }

  return theyPlay;
}


function johnLennonFacts(facts) {
  var shoutedFacts = [];
  var i = 0;

  while (i < facts.length) {
    var fact = facts[i];
    shoutedFacts.push(fact + "!!!")
    i++;
  }

  return shoutedFacts;
}


function iLoveTheBeatles(num) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return array;
}
