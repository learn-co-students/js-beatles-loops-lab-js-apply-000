// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (let i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts) {
  var n = 0;
  var result = [];
  while (n < facts.length) {
    result.push(facts[n] + "!!!");
    n++;
  }
  return result;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return love;
}



