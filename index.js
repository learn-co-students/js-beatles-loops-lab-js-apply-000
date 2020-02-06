// add solution here
function theBeatlesPlay(musicians, instruments) {
  var intros = [];
  for (var i = 0; i < musicians.length; i++) {
    intros.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return intros;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var result = [];
  while (counter < facts.length) {
    result.push(`${facts[counter]}!!!`);
    counter++;
  }
  return result;
}

function iLoveTheBeatles(num) {
  var result = [];
  do {
    result.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return result;
}
