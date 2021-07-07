function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + " plays " + instruments[i];
    array.push(sentence);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;

  while (i < facts.length) {
    var sentence = facts[i] + "!!!";
    array.push(sentence);
    i++;
  }

  return array;
}

function iLoveTheBeatles(number) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    number = number += 1;
  } while (number < 15);

  return array;
}
