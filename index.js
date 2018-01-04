function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for (let i = 0; i < musicians.length; i++) {
    output[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return output;
}
function johnLennonFacts(facts) {
  let i = facts.length
  while (i > 0) {
    facts[i - 1] = `${facts[i - 1]}!!!`
    i--
  }
  return facts;
}
function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push('I love the Beatles!');
    n++;
  }
  while (n < 15);
  return love
}
