function theBeatlesPlay(musicians, instruments) {
  var beatleFacts = [];
  for (var i = 0; i < musicians.length; i++) {
    beatleFacts.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatleFacts
}

function johnLennonFacts(facts) {
  var l = facts.length - 1;
  var i = -1;
  while (i < l) {
    i++;
    facts[i] = `${facts[i]}!!!`;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!")
    number++
  } while (number < 15);
  return love
}
