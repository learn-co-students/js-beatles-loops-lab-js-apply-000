function theBeatlesPlay(musicians, instruments) {
  var play = [];
  for (var i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return play;
}

function johnLennonFacts(facts) {
    var shoutFacts = [];
    var i = 0;
    while (i < facts.length) {
      shoutFacts.push(facts[i] + "!!!");
      i++;
    }
    return shoutFacts;
}

function iLoveTheBeatles(num) {
  var repeat = [];
  do {
    repeat.push("I love the Beatles!");
    num++
  } while (num < 15);
  return repeat;
}