function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlay;
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0;
  while (i < array.length) {
    facts.push(array[i] + "!!!");
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var love = [];
  var i = 0;
  if (n < 15) {
    do {
      love.push("I love the Beatles!");
      i++;
    } while (i <= n);
  } else if (n >= 15) {
    love.push("I love the Beatles!");
  }
  return love;
}
